const Example = (db, DataTypes) => {
  const attributes = {
    attr1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: {
          msg: "attr1 must consist of numbers/letters",
        },
        notEmpty: {
          msg: "attr1 is required",
        },
        len: [3, 10],
      },
    },
  };
  const options = {};
  return db.define("example", attributes, options);
};

module.exports = Example;
