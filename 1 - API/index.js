const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./Routes");
const server = express();

/* configurações do servidor */
server.use(helmet());               /* Headers de segurança */
server.use(morgan("combined"));     /* Log de requisições (console) */

/* Rotas do servidor */
server.use('/notas', routes.NF);

server.listen(4000, 'localhost', ()=>{
    console.log(`Servidor executando em http://localhost:4000`);
});