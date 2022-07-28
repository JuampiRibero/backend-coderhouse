const logger = require("../utils/logger");

const noImplementadaController = (req, res) => {
  logger.warn("Ruta no implementada");
  res.send("Ruta no implementada");
};

module.exports = {
  noImplementadaController,
};
