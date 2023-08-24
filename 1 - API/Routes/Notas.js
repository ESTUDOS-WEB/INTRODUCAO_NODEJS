const { Router } = require("express");
const banco = require("../dataBase");

const router = Router();

router.get("/", (req, res) => {
  res.json(banco.notas);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const nota = banco.notas.filter((i) => i.id.toString() === id);

  if (nota.length > 0) res.json(nota);
  else res.status(404).json({ messagem: "Conteudo não foi encontrado." });
});

router.post("/", (req, res) => {
    const nota = req.body;

    banco.notas.push(nota);
    res.status(201).json({messagem: "Cadastrado com sucesso!"})

});

router.put("/:id", (req, res) => {
    const nota = req.body;
    const id = req.params.id;
    const idX = banco.notas.findIndex((i) => i.id.toString() === id);

    nota.id = id;

    banco.notas[idX] = nota;

    res.json({messagem: "Atualizado com sucesso!"})

});


router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const idX = banco.notas.findIndex((i) => i.id.toString() === id);

  banco.notas.splice(idX, 1);

  if (idX > -1) res.status(204).end();
  else res.status(404).json({ messagem: "Conteudo não foi encontrado." });
});

module.exports = { router };
