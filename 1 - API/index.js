const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./Routes");
const server = express();

/* configurações do servidor  */
server.use(helmet());                   /* Headers de segurança */
server.use(morgan("dev"));              /* Log de requisições (console) */
server.use(express.json());             /* Middleware para ler JSON corretamente em requests */

/* Rotas do servidor */
server.use('/notas', routes.Notas);

server.listen(4000, 'localhost', ()=>{
    console.log(`Servidor executando em http://localhost:4000`);
});