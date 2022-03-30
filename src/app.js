// Global imports
const express = require("express");
const winston = require("./utils/logger");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const compression = require("compression");
const bodyParser = require("body-parser");
const httpStatus = require("http-status");

// App imports
const { errorHandler } = require("./middlewares");
const routes = require("./routes");
const { ApiError } = require("./utils");

// Init express app
const app = express();

// Set express logger
app.use(morgan("combined", { stream: winston.stream }));

// Set security HTTP headers
app.use(helmet());

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// Enable cors
app.use(cors());
app.options("*", cors());

// App router
app.use("/", routes);

// Send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, [{ msg: "Not found" }]));
});

// Global error handler
app.use(errorHandler);

module.exports = app;
