const path = require('node:path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { Client } = require('pg');
const { genres, games } = require('./seed-data');

const createInventoryDatabase = `
    -- Genres Table
    CREATE TABLE IF NOT EXISTS genres (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(255) NOT NULL UNIQUE,
        color VARCHAR(7) NOT NULL DEFAULT '#FFFFFF',

        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE
    );

    -- Games Table
    CREATE TABLE IF NOT EXISTS games (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        price NUMERIC(10,2) NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 0,
        image_url VARCHAR(255) NOT NULL,

        genre_id INTEGER NOT NULL,

        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE,

        CONSTRAINT fk_genre FOREIGN KEY (genre_id) REFERENCES genres(id) ON DELETE CASCADE
    );
`;

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

if (!user) console.log("User unavailable");
if (!password) console.log("Password unavailable");

async function addInitialGames(client) {
    // Insert genres
    for (let i = 0; i < genres.length; i++) {
        const { name, color } = genres[i];

        await client.query(`INSERT INTO genres (name, color) VALUES ($1, $2)`, [name, color]);
    }

    // Insert games
    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        const { title, description, price, quantity, image_url, genre_id } = game;

        await client.query(
            `INSERT INTO games 
                (title, description, price, quantity, image_url, genre_id)
                VALUES ($1, $2, $3, $4, $5, $6)`,
            [title, description, price, quantity, image_url, genre_id]
        );
    }
}

async function main() {
    console.log("Seeding...");

    const client = new Client({
	    connectionString: dbUrl || `postgresql://${user}:${password}@${host}:${port}/${dbName}`,
	    ssl: dbUrl ? { rejectUnauthorized: false } : undefined,
    });


    try {
        await client.connect();

        await client.query("BEGIN");

        await client.query(createInventoryDatabase);
        await addInitialGames(client);

        await client.query("COMMIT");

        console.log("Seeding complete 🚀");
    } catch (err) {
        await client.query("ROLLBACK");
        console.error("Seeding failed:", err);
    } finally {
        await client.end();
        console.log("Connection closed.");
    }
}

main();