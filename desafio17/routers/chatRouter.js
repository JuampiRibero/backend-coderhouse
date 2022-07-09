const server = require("express").Router();
const logger = require('../utils/logger');

server.get("/", (req, res) => {
  if (req.session.user) {
    logger.info("Chat usario");
    return res.render("chat.hbs");
  } else return res.redirect("login");
});

module.exports = server;
