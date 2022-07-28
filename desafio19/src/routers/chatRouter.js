const router = require("express").Router();
const { getChatController } = require("../controllers/chatController.js");

router.get("/", getChatController);

module.exports = router;
