const logger = require("../utils/logger");
const path = require("path")
const Contenedor = require("../daos/contenedor");
const users = new Contenedor(path.join(__dirname, "../data/users.json"));

const getLoginController = (req, res) => {
  logger.info("Loguear usuario");
  return res.render("login.hbs");
};

const postLoginController = (req, res) => {
  let username = req.body.name;
  req.session.user = username;
  return res.redirect("productos");
};

const getLogoutController = (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      logger.info("Usuario deslogueado");
      res.render("bye_banner.hbs");
    } else res.send({ status: "Logout ERROR", body: err });
  });
};

const getHomePageController = (req, res) => {
  return res.render("login.hbs");
}

const getRegisterController = (req, res) => {
  return res.render("register.hbs");
}

const postRegisterController = (req, res) => {
  users.save(req.body);
  let user = req.body.username;
  req.session.user = user;
  return res.redirect("login");
}

const getLoginErrorController = (req, res) => {
  return res.render("error-login.hbs", {name: "logearse", path: "login"});
}

const getRegisterErrorController = (req, res) => {
  return res.render("error-register.hbs", {name: "registrarse", path: "register"});
}

module.exports = {
    getLoginController, postLoginController, getLogoutController, getHomePageController, getRegisterController, postRegisterController, getLoginErrorController, getRegisterErrorController
}