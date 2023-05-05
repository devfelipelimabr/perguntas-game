const Sequelize = require("sequelize");
const connection = require("./database");

const Perguntas = connection.define("quiz", {
  user: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Perguntas.sync({ force: false }).then(() => {
  console.log(`Tabela criada com sucesso!`);
}); //Caso já exista uma tabela com esse nome, não irá forçar a criação de outra

module.exports = Perguntas;