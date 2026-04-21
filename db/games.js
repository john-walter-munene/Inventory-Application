const pool = require('./pool');

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
const getAllGames = async () => {
    const { rows } = await pool.query(`SELECT * FROM games`);
    return rows;
};

const getGameById = async (id) => {
    const { rows } = await pool.query(`SELECT * FROM games WHERE id = $1`, [id]);
    return rows[0];
};

// Read filters
const getGamesByPriceAsc = async () => {
    const { rows } = await pool.query(`SELECT * FROM games ORDER BY price ASC`);
    return rows;
};

const getGamesByPriceDesc = async () => {
    const { rows } = await pool.query(`SELECT * FROM games ORDER BY price DESC`);
    return rows;
};

const getGamesByNameAsc = async () => {
    const { rows } = await pool.query(`SELECT * FROM games ORDER BY title ASC`);
    return rows;
};

const getGamesByNameDesc = async () => {
    const { rows } = await pool.query(`SELECT * FROM games ORDER BY title DESC`);
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
    getGameById,
    getGamesByPriceAsc,
    getGamesByPriceDesc,
    getGamesByNameAsc,
    getGamesByNameDesc,
    updateGame,
    deleteGame,
};