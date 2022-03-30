const { checkSchema } = require("express-validator");

const create = checkSchema({
  attr1: {
    notEmpty: {
      errorMessage: "Attr1 is required",
    },
    isLength: {
      errorMessage: "Attr1 must be at least 3 characters",
      options: { min: 3 },
    },
  },
});

const update = create;

module.exports = {
  create,
  update,
};
