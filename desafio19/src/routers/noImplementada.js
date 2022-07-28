const router = require("express").Router();
const { noImplementadaController } = require("../controllers/noImplementadaController");

router.get("*", noImplementadaController);

module.exports = router;
