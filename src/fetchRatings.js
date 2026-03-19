const fs = require('fs');
const path = require('path');
const { gunzipSync } = require('zlib');

const dbPath = path.join(__dirname, '../database/beckDB.js');
const ratingsDatasetUrl = 'https://datasets.imdbws.com/title.ratings.tsv.gz';

function parseMovies(movies) {
    if (!Array.isArray(movies)) {
        throw new TypeError('beckDB.js must export an array of movies.');
    }

    return movies.map((movie) => ({ ...movie }));
}

function loadMoviesFromDb(dbFilePath = dbPath) {
    delete require.cache[require.resolve(dbFilePath)];
    const exportedMovies = require(dbFilePath);
    return parseMovies(exportedMovies);
}

function extractTitleId(imdbUrl) {
    const match = imdbUrl ? imdbUrl.match(/title\/(tt\d+)/) : null;
    return match ? match[1] : null;
}

function parseRatingsDataset(datasetContent, requiredTitleIds) {
    const ratingsByTitleId = new Map();

    for (const line of datasetContent.split('\n').slice(1)) {
        if (!line) {
            continue;
        }

        const [titleId, averageRating] = line.split('\t');
        if (!requiredTitleIds.has(titleId)) {
            continue;
        }

        ratingsByTitleId.set(titleId, averageRating);
        if (ratingsByTitleId.size === requiredTitleIds.size) {
            break;
        }
    }

    return ratingsByTitleId;
}

async function fetchRatingsMap(requiredTitleIds, fetchImpl = globalThis.fetch) {
    if (typeof fetchImpl !== 'function') {
        throw new Error('Fetch API is not available in this Node.js runtime.');
    }

    const response = await fetchImpl(ratingsDatasetUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch IMDb ratings dataset: ${response.status} ${response.statusText}`.trim());
    }

    const compressedBuffer = Buffer.from(await response.arrayBuffer());
    const datasetContent = gunzipSync(compressedBuffer).toString('utf8');

    return parseRatingsDataset(datasetContent, requiredTitleIds);
}

function escapeString(value) {
    return String(value)
        .replaceAll('\\', '\\\\')
        .replaceAll('"', '\\"');
}

function formatMovie(movie) {
    let result = '    {\n';
    result += `        number: ${movie.number},\n`;
    result += `        title: "${escapeString(movie.title)}",\n`;
    result += `        year: ${movie.year},\n`;
    if (movie.description) {
        result += `        description: "${escapeString(movie.description)}",\n`;
    }
    result += `        imdbUrl: "${escapeString(movie.imdbUrl)}"`;

    if (movie.tv4playUrl || movie.runtime || movie.imdbRating) {
        result += ',';
    }
    result += '\n';

    if (movie.tv4playUrl) {
        result += `        tv4playUrl: "${escapeString(movie.tv4playUrl)}"`;
        if (movie.runtime || movie.imdbRating) {
            result += ',';
        }
        result += '\n';
    }
    if (movie.runtime) {
        result += `        runtime: "${escapeString(movie.runtime)}"`;
        if (movie.imdbRating) {
            result += ',';
        }
        result += '\n';
    }
    if (movie.imdbRating) {
        result += `        imdbRating: "${escapeString(movie.imdbRating)}"\n`;
    }
    result += '    }';
    return result;
}

function serializeMovies(movies) {
    return `const beckMovies = [\n${movies.map(formatMovie).join(',\n')}\n];\n`;
}

async function updateRatings(options = {}) {
    const loadMovies = options.loadMovies || loadMoviesFromDb;
    const writeFileSync = options.writeFileSync || fs.writeFileSync;
    const fetchImpl = options.fetchImpl || globalThis.fetch;

    let movies;
    try {
        movies = loadMovies(dbPath);
    } catch (error) {
        console.error('Failed to parse beckDB.js:', error);
        return null;
    }

    const requiredTitleIds = new Set();
    for (const movie of movies) {
        const titleId = extractTitleId(movie.imdbUrl);
        if (titleId) {
            requiredTitleIds.add(titleId);
        }
    }

    let ratingsByTitleId;
    try {
        console.log('Fetching latest IMDb ratings dataset...');
        ratingsByTitleId = await fetchRatingsMap(requiredTitleIds, fetchImpl);
    } catch (error) {
        console.error('Failed to fetch IMDb ratings dataset:', error);
        return null;
    }

    for (const movie of movies) {
        if (!movie.imdbUrl) {
            console.log(`No imdbUrl for: ${movie.title}`);
            continue;
        }

        const titleId = extractTitleId(movie.imdbUrl);
        if (!titleId) {
            console.log(`Invalid imdbUrl for: ${movie.title}`);
            continue;
        }

        console.log(`Updating IMDb rating for: ${movie.title}`);
        const rating = ratingsByTitleId.get(titleId);
        if (rating) {
            movie.imdbRating = rating;
            console.log(`  -> Rating: ${rating}`);
        } else {
            console.log('  -> Rating not found');
        }
    }

    writeFileSync(dbPath, serializeMovies(movies), 'utf8');
    console.log('beckDB.js updated with latest IMDb ratings.');
    return movies;
}

async function main(options) {
    await updateRatings(options);
}

/* istanbul ignore next */
if (require.main === module) {
    main().catch((error) => {
        console.error('Unexpected error while updating ratings:', error);
        process.exitCode = 1;
    });
}

module.exports = {
    extractTitleId,
    fetchRatingsMap,
    formatMovie,
    loadMoviesFromDb,
    main,
    parseMovies,
    parseRatingsDataset,
    serializeMovies,
    updateRatings
};
