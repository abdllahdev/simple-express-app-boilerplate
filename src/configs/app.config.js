require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const config = {
  PORT: process.env.APP_PORT,
};

module.exports = config;
