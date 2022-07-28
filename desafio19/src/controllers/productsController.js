const path = require("path")
const Contenedor = require("../daos/contenedor");
const logger = require("../utils/logger");

const productos = new Contenedor(path.join(__dirname, "../data/productos.json"));

const getProductsController = (req, res) => {
  if (req.session.user) {
    let content = productos.content;
    let boolean = content.length !== 0;
    logger.info("Usuario logueado, página de inicio cargada correctamente");
    return res.render("index.hbs", {
      list: content,
      showList: boolean,
      name: req.session.user,
    });
  } else return res.redirect("login");
};

const postProductsController = (req, res) => {
  if (req.session.user) {
    productos.save(req.body);
    let content = productos.content;
    let boolean = content.length !== 0;
    return res.render("index.hbs", {
      list: content,
      showList: boolean,
      name: req.session.user,
    });
  } else return res.redirect("login");
};

module.exports = {
  getProductsController,
  postProductsController,
};
