const Sequelize = require("sequelize");
const { dbConfig } = require("../configs");

// Create database if does not exist

const mysql = require("mysql2");
const logger = require("../utils/logger");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USERNAME,
  password: dbConfig.PASSWORD,
  port: dbConfig.PASSWORD,
});
connection.query(
  `CREATE DATABASE IF NOT EXISTS \`${dbConfig.DATABASE}\`;`,
  (err, result, fields) => {
    if (err) logger.error(err.message);
    if (result) logger.info(result);
    if (fields) logger.info(fields);
  }
);
connection.destroy();

// Connect to database
const db = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USERNAME,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    logging: false,
  }
);

module.exports = db;
