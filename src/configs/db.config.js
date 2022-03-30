require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const config = {
  USERNAME: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_NAME,
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  DIALECT: process.env.DB_DIALECT,
};

module.exports = config;
