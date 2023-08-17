const { Router } = require("express");
const banco = require("../dataBase");

const router = Router();

router.get('/', (req, res)=>{
    res.json(banco.notas);
});

router.get('/:id', (req, res)=>{
    const id = req.params.id;
    const nota = banco.notas.filter( (i) => i.id.toString() === id );

    if(nota.length > 0 ){
        res.json(nota);
    }else{
        res.status(404).json({ messagem: "Conteudo não foi encontardo." })
    }
});

module.exports = { router };