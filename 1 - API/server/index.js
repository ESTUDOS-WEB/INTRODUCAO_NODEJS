const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("../Routes");
const { changeError } = require("../middleware/changeError");
const server = express();

dotenv.config();

const HOST = process.env.HOST || "127.0.0.1";
const PORTA = process.env.PORTA || 5000;
const VERSAO = process.env.VERSAO || "v1";
const BASE_API = VERSAO;

/* configurações do servidor  */
server.use(helmet()); /* Headers de segurança */
server.use(morgan("dev")); /* Log de requisições (console) */
server.use(
  express.json()
); /* Middleware para ler JSON corretamente em requests */

/* Rotas do servidor */
server.use(`/${BASE_API}/notas`, routes.Notas);
server.use(`/${BASE_API}/usuarios`, routes.Usuarios);
server.use(`/${BASE_API}/produtos`, routes.Produtos);
server.use(routes.NotFound);
server.use(changeError);

const start = () => {
  server.listen(PORTA, HOST, () => {
    console.log(`Servidor executando em http://${HOST}:${PORTA}/${VERSAO}`);
  });
};

module.exports = { start };
