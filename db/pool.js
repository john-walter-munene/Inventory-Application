const path = require('node:path');
require('dotenv').config({ path: path.join(__dirname, '../.env')});

const { Pool } = require('pg');

module.exports = new Pool({ 
    connectionString: process.env.DATABASE_URL,
  ssl: isProduction
    ? { rejectUnauthorized: false }
    : false
});