const logger = require("../utils/logger");

// INFO SIN COMPRESION
const getInfoController = (req, res) => {
  if (req.session.user) {
    logger.info("Informacion con Procces sin compresión");
    const args =
      process.argv.length > 2 ? process.argv.slice(2).join(" → ") : "Ninguno";

    res.send(`
              <h2>Información con Process</h2>
                <ul>
                  <li>Argumentos de entrada: ${args}</li>
                  <li>Sistema operativo: ${process.platform}</li>
                  <li>Versión de node.js: ${process.version}</li>
                  <li>Memoria total reservada: ${`${Math.round(
                    process.memoryUsage().rss / 1024
                  )} KB`}</li>
                  <li>Path de ejecución: ${process.execPath}</li>
                  <li>Process id: ${process.pid}</li>
                  <li>Carpeta del proyecto: ${process.cwd()}</li>
                  <li>Número de Procesadores: ${
                    require("os").cpus().length
                  }</li>
                </ul>
              <a class="btn btn-primary" href="/productos" >Volver</a>
            `);
  } else return res.redirect("login");
};

// INFO CON COMPRESION
const getInfoCompresionController = (req, res) => {
  if (req.session.user) {
    logger.info("Informacion con Procces con compresión");
    const args =
      process.argv.length > 2 ? process.argv.slice(2).join(" → ") : "Ninguno";

    res.send(`
              <h2>Información con Process</h2>
                <ul>
                  <li>Argumentos de entrada: ${args}</li>
                  <li>Sistema operativo: ${process.platform}</li>
                  <li>Versión de node.js: ${process.version}</li>
                  <li>Memoria total reservada: ${`${Math.round(
                    process.memoryUsage().rss / 1024
                  )} KB`}</li>
                  <li>Path de ejecución: ${process.execPath}</li>
                  <li>Process id: ${process.pid}</li>
                  <li>Carpeta del proyecto: ${process.cwd()}</li>
                  <li>Número de Procesadores: ${
                    require("os").cpus().length
                  }</li>
                </ul>
              <a class="btn btn-primary" href="/productos" >Volver</a>
            `);
  } else return res.redirect("login");
};

module.exports = {
  getInfoController,
  getInfoCompresionController,
};
