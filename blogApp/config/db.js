const mysql = require('mysql2');

/* Creating a connection pool to the database. */
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
});

/* Making the connection pool available to all the files in the project. */
global.db = pool;