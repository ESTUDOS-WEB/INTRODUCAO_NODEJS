const { Router } = require("express");
const banco = require("../dataBase");

const router = Router();

router.get("/", (req, res, next) => {
  try {
    res.json(banco.produtos);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    const produto = banco.produtos.filter((i) => i.id.toString() === id);

    if (produto.length > 0) res.json(produto);
    else res.status(404).json({ messagem: "Conteudo não foi encontrado." });
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    const produto = req.body;
    let id = 0;
    banco.produtos.forEach( i => {
      if(i.id > id) id = i.id;
    });
    produto.id = (id + 1);


    banco.produtos.push(produto);
    res.status(201).json({ messagem: "Cadastrado com sucesso!" });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    const produto = req.body;
    const id = req.params.id;
    const idX = banco.produtos.findIndex((i) => i.id.toString() === id);

    produto.id = id;

    if (idX > -1) {
      banco.produtos[idX] = produto;
      res.json({ messagem: "Atualizado com sucesso!" });
    } else res.status(404).json({ messagem: "Conteudo não foi encontrado." });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    const idX = banco.produtos.findIndex((i) => i.id.toString() === id);

    banco.produtos.splice(idX, 1);

    if (idX > -1) res.status(204).end();
    else res.status(404).json({ messagem: "Conteudo não foi encontrado." });
  } catch (error) {
    next(error);
  }
});

module.exports = { router };
