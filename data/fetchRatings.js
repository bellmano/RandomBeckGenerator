// This script reads beckDB.js, fetches IMDB ratings for each imdbUrl, and updates the imdbRating field.

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const dbPath = path.join(__dirname, 'beckDB.js');

function extractRating(html) {
    const match = html.match(/<span class="sc-[a-z0-9]+-1[^"]*" data-testid="hero-rating-bar__aggregate-rating__score">(\d+\.\d)<\/span>/);
    if (match) return match[1];
    const altMatch = html.match(/<span itemprop="ratingValue">(\d+\.\d)<\/span>/);
    if (altMatch) return altMatch[1];
    return null;
}

async function updateRatings() {
    let dbContent = fs.readFileSync(dbPath, 'utf8');
    let movies;
    try {
        dbContent = dbContent.replace(/const beckMovies = /, '');
        dbContent = dbContent.replace(/;\s*$/, '');
        movies = eval(dbContent);
    } catch (e) {
        console.error('Failed to parse beckDB.js:', e);
        return;
    }

    for (const movie of movies) {
        if (!movie.imdbUrl) {
            console.log(`No imdbUrl for: ${movie.title}`);
            continue;
        }
        try {
            console.log(`Fetching IMDB rating for: ${movie.title}`);
            const res = await fetch(movie.imdbUrl);
            const html = await res.text();
            const rating = extractRating(html);
            if (rating) {
                movie.imdbRating = rating;
                console.log(`  -> Rating: ${rating}`);
            } else {
                console.log(`  -> Rating not found`);
            }
        } catch (err) {
            console.log(`  -> Error fetching: ${err}`);
        }
    }

    const newContent = 'const beckMovies = ' + JSON.stringify(movies, null, 4) + ';\n';
    fs.writeFileSync(dbPath, newContent, 'utf8');
    console.log('beckDB.js updated with latest IMDB ratings.');
}

updateRatings();
