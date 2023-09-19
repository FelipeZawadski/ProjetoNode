module.exports = (sequelize, Sequelize) => {
  const Pessoa = sequelize.define("pessoa", { 
    nome: {
      type: Sequelize.STRING
    },
    cpf: {
      type: Sequelize.INTEGER
    },
    telefone: {
      type: Sequelize.INTEGER
    },
    rua: {
      type: Sequelize.STRING
    },
    numero: {
      type: Sequelize.INTEGER
    },
    complemento: {
      type: Sequelize.STRING
    },
    bairro: {
      type: Sequelize.STRING
    },
    cep: {
      type: Sequelize.INTEGER
    },
    cidade: {
      type: Sequelize.STRING
    },
    estado: {
      type: Sequelize.STRING
    },
  });
  return Pessoa;
};
