require("dotenv").config();

const appConfig = require("./app.config");
const dbConfig = require("./db.config");
const loggerConfig = require("./logger.config");

module.exports = {
  appConfig,
  dbConfig,
  loggerConfig,
};
