const Sequelize = require("sequelize");
const { dbConfig } = require("../configs");

// Create database if does not exist

const mysql = require("mysql2");
const logger = require("../utils/logger");

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.username,
  password: dbConfig.password,
  port: dbConfig.port,
});
connection.query(
  `CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\`;`,
  (err, result, fields) => {
    if (err) logger.error(err.message);
    if (result) logger.info(result);
    if (fields) logger.info(fields);
  }
);
connection.destroy();

// Connect to database
const db = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false,
  }
);

module.exports = db;
