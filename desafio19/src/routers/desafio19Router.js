const router = require("express").Router();
const { getInfoController, getInfoCompresionController } = require("../controllers/infoController.js");
const { getRandomController } = require("../controllers/randomController");
const compression = require('compression');

router.get("/info", getInfoController);
router.get("/infozip", compression(), getInfoCompresionController);
router.get("/randoms", getRandomController);

module.exports = router;
