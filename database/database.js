const Sequelize = require("sequelize");

const connection = new Sequelize("questionario", "root", "128145", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
