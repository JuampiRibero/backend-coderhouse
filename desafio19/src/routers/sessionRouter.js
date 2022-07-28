const router = require("express").Router();
const {getLoginController, postLoginController, getLogoutController, getHomePageController, getRegisterController, postRegisterController, getLoginErrorController} = require("../controllers/sessionController");
const {passportAuthLogin, passportAuthRegister} = require("../middlewares/passport");

router.get("/login", getLoginController);
router.post("/login", postLoginController);
router.get("/logout", getLogoutController);
router.get("/", getHomePageController);
router.get("/register", getRegisterController);
router.post("/register", passportAuthRegister, postRegisterController);
router.get("/login-error", getLoginErrorController);

module.exports = router;