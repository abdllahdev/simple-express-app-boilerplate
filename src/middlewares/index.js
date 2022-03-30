const errorHandler = require("./errorHandler.middleware");
const catchValidationErrors = require("./catchValidationErrors.middleware");

module.exports = {
  errorHandler,
  catchValidationErrors,
};
