const mysql = require("mysql2");
require("dotenv").config();

const connection = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 30,
};

module.exports = mysql.createPool(connection);
