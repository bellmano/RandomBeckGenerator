jest.mock('fs');

const fs = require('fs');
const { gzipSync } = require('zlib');
const {
    extractTitleId,
    fetchRatingsMap,
    formatMovie,
    main,
    parseMovies,
    parseRatingsDataset,
    serializeMovies,
    updateRatings
} = require('../src/fetchRatings.js');

function createDatasetResponse(datasetContent, overrides = {}) {
    const compressed = gzipSync(datasetContent);
    return {
        ok: true,
        status: 200,
        statusText: 'OK',
        arrayBuffer: jest.fn().mockResolvedValue(
            compressed.buffer.slice(compressed.byteOffset, compressed.byteOffset + compressed.byteLength)
        ),
        ...overrides
    };
}

describe('fetchRatings.js', () => {
    let consoleLogSpy;
    let consoleErrorSpy;

    beforeEach(() => {
        jest.clearAllMocks();
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
        consoleErrorSpy.mockRestore();
    });

    test('extractTitleId returns the IMDb title id when present', () => {
        expect(extractTitleId('https://www.imdb.com/title/tt0118693')).toBe('tt0118693');
    });

    test('extractTitleId returns null when the URL is missing or invalid', () => {
        expect(extractTitleId()).toBeNull();
        expect(extractTitleId('https://www.imdb.com/name/nm0000001')).toBeNull();
    });

    test('parseMovies evaluates the beckDB content', () => {
        const movies = parseMovies('const beckMovies = [{ number: 1, title: "Movie", year: 2020, imdbUrl: "https://www.imdb.com/title/tt1" }];');
        expect(movies).toHaveLength(1);
        expect(movies[0].title).toBe('Movie');
    });

    test('parseRatingsDataset filters to the required title ids', () => {
        const dataset = ['tconst\taverageRating\tnumVotes', 'tt1\t6.2\t100', 'tt2\t7.3\t200', 'tt3\t8.0\t300', ''].join('\n');
        const ratings = parseRatingsDataset(dataset, new Set(['tt2', 'tt3']));

        expect(ratings.size).toBe(2);
        expect(ratings.get('tt1')).toBeUndefined();
        expect(ratings.get('tt2')).toBe('7.3');
        expect(ratings.get('tt3')).toBe('8.0');
    });

    test('parseRatingsDataset skips blank lines in the dataset', () => {
        const dataset = ['tconst\taverageRating\tnumVotes', 'tt1\t6.2\t100', '', 'tt2\t7.3\t200'].join('\n');
        const ratings = parseRatingsDataset(dataset, new Set(['tt9']));

        expect(ratings.size).toBe(0);
    });

    test('fetchRatingsMap parses the gzipped dataset response', async () => {
        const fetchImpl = jest.fn().mockResolvedValue(
            createDatasetResponse(['tconst\taverageRating\tnumVotes', 'tt0118693\t6.2\t1952'].join('\n'))
        );

        const ratings = await fetchRatingsMap(new Set(['tt0118693']), fetchImpl);

        expect(fetchImpl).toHaveBeenCalledTimes(1);
        expect(ratings.get('tt0118693')).toBe('6.2');
    });

    test('fetchRatingsMap throws when fetch is unavailable', async () => {
        const originalFetch = globalThis.fetch;
        globalThis.fetch = undefined;

        await expect(fetchRatingsMap(new Set(['tt1']))).rejects.toThrow('Fetch API is not available');

        globalThis.fetch = originalFetch;
    });

    test('fetchRatingsMap throws when the dataset request fails', async () => {
        const fetchImpl = jest.fn().mockResolvedValue({
            ok: false,
            status: 503,
            statusText: 'Service Unavailable'
        });

        await expect(fetchRatingsMap(new Set(['tt1']), fetchImpl)).rejects.toThrow('Failed to fetch IMDb ratings dataset: 503 Service Unavailable');
    });

    test('formatMovie includes all optional fields and escapes strings', () => {
        const formatted = formatMovie({
            number: 1,
            title: 'Quote "Test"',
            year: 2020,
            description: 'Back\\slash and "quote"',
            imdbUrl: 'https://www.imdb.com/title/tt1',
            tv4playUrl: 'https://tv4play.se',
            runtime: '90 min',
            imdbRating: '7.5'
        });

        expect(formatted).toContain('title: "Quote \\"Test\\""');
        expect(formatted).toContain('description: "Back\\\\slash and \\"quote\\""');
        expect(formatted).toContain('tv4playUrl: "https://tv4play.se",');
        expect(formatted).toContain('runtime: "90 min",');
        expect(formatted).toContain('imdbRating: "7.5"');
    });

    test('serializeMovies preserves formatting for minimal movie objects', () => {
        const output = serializeMovies([{ number: 1, title: 'Movie', year: 2020, imdbUrl: 'https://www.imdb.com/title/tt1' }]);

        expect(output).toBe([
            'const beckMovies = [',
            '    {',
            '        number: 1,',
            '        title: "Movie",',
            '        year: 2020,',
            '        imdbUrl: "https://www.imdb.com/title/tt1"',
            '    }',
            '];',
            ''
        ].join('\n'));
    });

    test('formatMovie omits optional fields that are not present', () => {
        const formatted = formatMovie({
            number: 2,
            title: 'TV4 Only',
            year: 2021,
            imdbUrl: 'https://www.imdb.com/title/tt2',
            tv4playUrl: 'https://tv4play.se/watch'
        });

        expect(formatted).toContain('tv4playUrl: "https://tv4play.se/watch"');
        expect(formatted).not.toContain('description:');
        expect(formatted).not.toContain('runtime:');
        expect(formatted).not.toContain('imdbRating:');
    });

    test('formatMovie keeps runtime without adding an imdb rating line', () => {
        const formatted = formatMovie({
            number: 3,
            title: 'Runtime Only',
            year: 2022,
            imdbUrl: 'https://www.imdb.com/title/tt3',
            runtime: '110 min'
        });

        expect(formatted).toContain('runtime: "110 min"');
        expect(formatted).not.toContain('imdbRating:');
    });

    test('updateRatings handles the complete flow with mixed movie states', async () => {
        fs.readFileSync.mockReturnValue(`const beckMovies = [
    {
        number: 1,
        title: "Rated Movie",
        year: 2020,
        imdbUrl: "https://www.imdb.com/title/tt1234567",
        runtime: "90 min"
    },
    {
        number: 2,
        title: "Missing Rating",
        year: 2021,
        imdbUrl: "https://www.imdb.com/title/tt7654321"
    },
    {
        number: 3,
        title: "Invalid URL",
        year: 2022,
        imdbUrl: "https://www.imdb.com/name/nm1234567"
    },
    {
        number: 4,
        title: "No URL",
        year: 2023
    }
];`);
        fs.writeFileSync.mockImplementation(() => {});

        const fetchImpl = jest.fn().mockResolvedValue(createDatasetResponse([
            'tconst\taverageRating\tnumVotes',
            'tt1234567\t7.5\t1200'
        ].join('\n')));

        const movies = await updateRatings({ fetchImpl });

        expect(movies[0].imdbRating).toBe('7.5');
        expect(movies[1].imdbRating).toBeUndefined();
        expect(fs.readFileSync).toHaveBeenCalled();
        expect(fs.writeFileSync).toHaveBeenCalledWith(expect.any(String), expect.stringContaining('imdbRating: "7.5"'), 'utf8');
        expect(consoleLogSpy).toHaveBeenCalledWith('Fetching latest IMDb ratings dataset...');
        expect(consoleLogSpy).toHaveBeenCalledWith('Updating IMDb rating for: Rated Movie');
        expect(consoleLogSpy).toHaveBeenCalledWith('  -> Rating: 7.5');
        expect(consoleLogSpy).toHaveBeenCalledWith('Updating IMDb rating for: Missing Rating');
        expect(consoleLogSpy).toHaveBeenCalledWith('  -> Rating not found');
        expect(consoleLogSpy).toHaveBeenCalledWith('Invalid imdbUrl for: Invalid URL');
        expect(consoleLogSpy).toHaveBeenCalledWith('No imdbUrl for: No URL');
        expect(consoleLogSpy).toHaveBeenCalledWith('beckDB.js updated with latest IMDb ratings.');
    });

    test('updateRatings returns null on parse error', async () => {
        fs.readFileSync.mockImplementation(() => {
            throw new Error('bad parse');
        });

        const result = await updateRatings({ fetchImpl: jest.fn() });

        expect(result).toBeNull();
        expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to parse beckDB.js:', expect.any(Error));
    });

    test('updateRatings returns null when fetching the dataset fails', async () => {
        fs.readFileSync.mockReturnValue('const beckMovies = [{ number: 1, title: "Movie", year: 2020, imdbUrl: "https://www.imdb.com/title/tt1" }];');

        const fetchImpl = jest.fn().mockRejectedValue(new Error('network down'));
        const result = await updateRatings({ fetchImpl });

        expect(result).toBeNull();
        expect(fs.writeFileSync).not.toHaveBeenCalled();
        expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to fetch IMDb ratings dataset:', expect.any(Error));
    });

    test('updateRatings supports injected file functions and default global fetch', async () => {
        const readFileSync = jest.fn().mockReturnValue('const beckMovies = [{ number: 1, title: "Movie", year: 2020, imdbUrl: "https://www.imdb.com/title/tt42" }];');
        const writeFileSync = jest.fn();
        const originalFetch = globalThis.fetch;
        globalThis.fetch = jest.fn().mockResolvedValue(createDatasetResponse([
            'tconst\taverageRating\tnumVotes',
            'tt42\t8.4\t4200'
        ].join('\n')));

        const result = await updateRatings({ readFileSync, writeFileSync });

        expect(result[0].imdbRating).toBe('8.4');
        expect(readFileSync).toHaveBeenCalledTimes(1);
        expect(writeFileSync).toHaveBeenCalledTimes(1);

        globalThis.fetch = originalFetch;
    });

    test('main delegates to updateRatings', async () => {
        fs.readFileSync.mockReturnValue('const beckMovies = [{ number: 1, title: "Movie", year: 2020, imdbUrl: "https://www.imdb.com/title/tt99" }];');
        fs.writeFileSync.mockImplementation(() => {});
        const originalFetch = globalThis.fetch;
        globalThis.fetch = jest.fn().mockResolvedValue(createDatasetResponse([
            'tconst\taverageRating\tnumVotes',
            'tt99\t6.8\t680'
        ].join('\n')));

        await main();

        expect(fs.writeFileSync).toHaveBeenCalledWith(expect.any(String), expect.stringContaining('imdbRating: "6.8"'), 'utf8');

        globalThis.fetch = originalFetch;
    });
});
