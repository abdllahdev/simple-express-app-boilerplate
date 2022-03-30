const { DataTypes } = require("sequelize");
const { db } = require("../helpers");
Example = require("./example.model")(db, DataTypes);

module.exports = {
  Example,
};
