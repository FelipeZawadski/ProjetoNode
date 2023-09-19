const db = require("../models");
const Pessoa = db.pessoa;
const Op = db.Sequelize.Op;

//Cria e salva um novo
exports.create = (req, res) => {
  // Valida requisição
  if (!req.body.nome) {
    res.status(400).send({
      message: "Não pode ser vazio"
    });
    return;
  }

  //Cria pessoa
  const pessoa = { //nome, cpf, telefone, rua, numero, complemento, bairro, cep, cidade, estado
    nome: req.body.nome,
    cpf: req.body.cpf,
    telefone: req.body.telefone,
    rua: req.body.rua,
    numero: req.body.numero,
    complemento: req.body.complemento,
    bairro: req.body.bairro,
    cep: req.body.cep,
    cidade: req.body.cidade,
    estado: req.body.estado
  };

  //Salva pessoa no db
  Pessoa.create(pessoa)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Occoreu um erro ao criar pessoa"
      });
    });
};

// Retorna os dados do DB
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;

  Pessoa.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao recuperar os dados do DB"
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Pessoa.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao encontrar ID = " + id
      });
    });
};

// Update Pessoa
exports.update = (req, res) => {
  const id = req.params.id;

  Pessoa.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pessoa Atualizada com sucesso"
        });
      } else {
        res.send({
          message: `Não foi possivel atualizar o ID`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao atualizar o ID = " + id
      });
    });
};

// Delete
exports.delete = (req, res) => {
  const id = req.params.id;

  Pessoa.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pessoa deletada com sucesso"
        });
      } else {
        res.send({
          message: `Não foi possivel deletar`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao deletar o ID = " + id
      });
    });
};
