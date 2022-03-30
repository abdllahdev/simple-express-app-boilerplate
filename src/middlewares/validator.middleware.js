const { validationResult } = require("express-validator");
const httpStatus = require("http-status");
const { ApiError } = require("../utils");

const validator = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req).formatWith((error) => {
      return {
        msg: error.msg,
        param: error.param,
        value: error.value,
      };
    });

    if (!errors.isEmpty()) {
      const error = new ApiError(httpStatus.BAD_REQUEST, errors.array());
      return next(error);
    }

    return next();
  };
};

module.exports = validator;
