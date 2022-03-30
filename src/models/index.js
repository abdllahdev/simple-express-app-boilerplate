const { sequelize } = require("../helpers");
Example = require("./example.model")(sequelize);

module.exports = {
  Example,
};
