const pool = require('./pool');
const { gamesOrderClause } = require('./utils');

// CREATE
const createGame = async (game) => {
    const { title, description, price, quantity, image_url, genre_id } = game;

    const { rows } = await pool.query(
        `INSERT INTO games
            (title, description, price, quantity, image_url, genre_id)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [title, description, price, quantity, image_url, genre_id]
    );

    return rows[0];
};

// READ
const getAllGames = async (orderBy) => {
    const orderBySQLClause = gamesOrderClause(orderBy);
    const query = `SELECT * FROM games ${orderBySQLClause}`;
    const { rows } = await pool.query(query);
    return rows;
};

const getGamesByGenreId = async (genreId, orderBy) => {
    const orderBySQLClause = gamesOrderClause(orderBy);

    const id = Number(genreId);
    if (Number.isNaN(id)) throw new Error('Invalid genreId');

    const { rows } = await pool.query(
        `SELECT * FROM games WHERE genre_id = $1 ${orderBySQLClause}`,
        [id]
    );

    return rows;
};

const getGameById = async (id) => {
    const { rows } = await pool.query(`SELECT * FROM games WHERE id = $1`, [id]);
    return rows[0];
};

const searchGames = async (query) => {
    const { rows } = await pool.query(`SELECT * FROM games WHERE title ILIKE $1`, [`%${query}%`]
    );

    return rows;
};

// UPDATE
const updateGame = async (game) => {
    const { id, title, description, price, quantity, image_url, genre_id } = game;

    const { rows } = await pool.query(
        `UPDATE games
            SET title = $1,
                description = $2,
                price = $3,
                quantity = $4,
                image_url = $5,
                genre_id = $6,
                updated_at = NOW()
            WHERE id = $7
            RETURNING *`,
        [title, description, price, quantity, image_url, genre_id, id]
    );

    return rows[0];
};

// DELETE
const deleteGame = async (id) => {
    const { rows } = await pool.query(`DELETE FROM games WHERE id = $1 RETURNING *`, [id]);
    return rows[0];
};

module.exports = {
    createGame,
    getAllGames,
    getGamesByGenreId,
    getGameById,
    searchGames,
    updateGame,
    deleteGame,
};