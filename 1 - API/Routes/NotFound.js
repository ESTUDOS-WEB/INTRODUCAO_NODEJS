const { Router } = require("express");

const router = Router();

router.get("*", (req, res, next) => {
    res.status(404).json({ messagem: "Conteudo não foi encontrado." });
});

router.post("*", (req, res, next) => {
    res.status(404).json({ messagem: "Conteudo não foi encontrado." });
});

router.put("*", (req, res, next) => {
    res.status(404).json({ messagem: "Conteudo não foi encontrado." });
});

router.delete("*", (req, res, next) => {
    res.status(404).json({ messagem: "Conteudo não foi encontrado." });
});

module.exports = { router };