module.exports = app => {
  const pessoas = require("../controllers/pessoa.controller.js");

  var router = require("express").Router();

  // Cria pessoa
  router.post("/", pessoas.create);

  // Recupera todos
  router.get("/", pessoas.findAll);

  // Recupera por id
  router.get("/:id", pessoas.findOne);

  // Atualiza Pessoa
  router.put("/:id", pessoas.update);

  // Deleta Pessoa
  router.delete("/:id", pessoas.delete);

  app.use("/api/pessoas", router);
};
