const server = require("express").Router();
const logger = require('../utils/logger');

server.get("/login", (req, res) => {
  logger.info("Loguear usuario");
  return res.render("login.hbs");
});
server.post("/login", (req, res) => {
  let username = req.body.name;
  req.session.user = username;
  return res.redirect("productos");
});

server.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      logger.info("Usuario deslogueado");
      res.render("bye_banner.hbs");
    } else res.send({ status: "Logout ERROR", body: err });
  });
});

server.get("/", (req, res) => {
  return res.render("login.hbs");
});

module.exports = server