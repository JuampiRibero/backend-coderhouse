const { fork } = require("child_process");
const logger = require('../utils/logger');

const getRandomController = (req, res) => {
  if (req.session.user) {
    logger.info("Números randoms creados");
    const cant = parseInt(req.query.cant) || 10000;
    const computo = fork("../desafio19/src/utils/randoms.js");
    computo.send(cant);
    computo.on("message", (result) => {
      res.render("../views/partials/randoms.hbs", {
        numeros: JSON.stringify(result),
      });
    });
  } else return res.redirect("login");
};

module.exports = {
  getRandomController,
};
