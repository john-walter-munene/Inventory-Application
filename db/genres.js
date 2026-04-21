const pool = require('./pool');

// Interacting with Genres
// Create genres
const createAGenre = async (genre) => {
    const { name, color } = genre;

    const { rows } = await pool.query(
        `INSERT INTO genres (name, color) VALUES ($1, $2) RETURNING *`, 
        [name, color]
    );

    return rows[0];
};

// Read genres and other entities relying on genre
const getAllGenres = async () => {
    const { rows } = await pool.query(`SELECT * FROM genres`);
    return rows;
}

const getGamesInASpecificGenre = async (genreId) => {
    const id = Number(genreId);
    const { rows } = await pool.query(`SELECT * FROM games WHERE genre_id = $1`, [id]);
    return rows;
}

// Update genres
const updateASpecificGenre = async (genre) => {
    const { name, color, id } = genre;

    const { rows } = await pool.query(
        `UPDATE genres SET name = $1, color = $2, updated_at = NOW() WHERE id = $3 RETURNING *`,
        [name, color, id]
    );

    return rows[0];
};

// Delete genre
const deleteGenre = async (genreId) => {
    const { rows } = await pool.query(`DELETE FROM genres WHERE id = $1 RETURNING *`, [genreId]);

    return rows[0];
};

module.exports = { createAGenre, getAllGenres, getGamesInASpecificGenre, updateASpecificGenre, deleteGenre };