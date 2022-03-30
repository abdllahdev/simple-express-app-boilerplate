const winston = require("winston");
const { loggerConfig } = require("../configs");

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(loggerConfig.errorFile),
    new winston.transports.File(loggerConfig.combinedFile),
    new winston.transports.Console(loggerConfig.console),
  ],
  exitOnError: false,
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function (message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

module.exports = logger;
