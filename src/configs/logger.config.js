const appRoot = require("app-root-path");

const config = {
  errorFile: {
    level: "info",
    filename: `${appRoot}/logs/error.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  combinedFile: {
    level: "info",
    filename: `${appRoot}/logs/combined.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
};

if (process.env.NODE_ENV !== "production") {
  config.console = {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
  };
}

module.exports = config;
