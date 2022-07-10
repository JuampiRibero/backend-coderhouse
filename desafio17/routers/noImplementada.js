const server = require("express").Router();
const logger = require("../utils/logger");

server.get("*", (req, res) => {
  logger.warn("Ruta no implementada");
  res.send("Ruta no implementada");
});

module.exports = server;
