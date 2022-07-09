const server = require("express").Router();
const ApiProductos = require("../api/apiProductos.js");
const apiProductos = new ApiProductos();
const logger = require('../utils/logger');

server.get("/productos-test", (req, res) => {
  const result = apiProductos.productos();
  logger.info("Productos con faker creados");
  return res.render("index.hbs", {
    list: result,
    showList: true,
    name: req.session.user,
  });
});

module.exports = server;
