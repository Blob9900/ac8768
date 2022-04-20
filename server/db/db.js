require('dotenv').config();
const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL || "postgres://postgres:lazy blob@127.0.0.1:5432/messenger", {
  logging: false
});

module.exports = db;
