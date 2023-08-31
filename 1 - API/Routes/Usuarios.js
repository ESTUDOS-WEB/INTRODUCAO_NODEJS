const { Router } = require("express");
const banco = require("../dataBase");

const router = Router();

router.get("/", (req, res, next) => {
  try {
    res.json(banco.usuarios);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    const usuario = banco.usuarios.filter((i) => i.id.toString() === id);

    if (usuario.length > 0) res.json(usuario);
    else res.status(404).json({ messagem: "Conteudo não foi encontrado." });
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    const usuario = req.body;
    let id = 0;
    banco.usuarios.forEach( i => {
      if(i.id > id) id = i.id;
    });
    usuario.id = (id + 1);

    banco.usuarios.push(usuario);
    res.status(201).json({ messagem: "Cadastrado com sucesso!" });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    const usuario = req.body;
    const id = req.params.id;
    const idX = banco.usuarios.findIndex((i) => i.id.toString() === id);

    usuario.id = id;

    if (idX > -1) {
      banco.usuarios[idX] = usuario;
      res.json({ messagem: "Atualizado com sucesso!" });
    } else res.status(404).json({ messagem: "Conteudo não foi encontrado." });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    const idX = banco.usuarios.findIndex((i) => i.id.toString() === id);

    banco.usuarios.splice(idX, 1);

    if (idX > -1) res.status(204).end();
    else res.status(404).json({ messagem: "Conteudo não foi encontrado." });
  } catch (error) {
    next(error);
  }
});

module.exports = { router };
