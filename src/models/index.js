const { db } = require("../helpers");
Example = require("./example.model")(db);

module.exports = {
  Example,
};
