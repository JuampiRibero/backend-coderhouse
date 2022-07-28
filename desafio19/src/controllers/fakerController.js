const ApiProductos = require("../services/apiProductos.js");
const apiProductos = new ApiProductos();
const logger = require("../utils/logger");

const getFakerController = (req, res) => {
  const result = apiProductos.productos();
  logger.info("Productos con faker creados");
  return res.render("index.hbs", {
    list: result,
    showList: true,
    name: req.session.user,
  });
};

module.exports = { getFakerController };
