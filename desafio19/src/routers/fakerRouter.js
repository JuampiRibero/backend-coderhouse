const router = require("express").Router();
const { getFakerController } = require("../controllers/fakerController.js");

router.get("/productos-test", getFakerController);

module.exports = router;
