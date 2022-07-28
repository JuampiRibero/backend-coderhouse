const logger = require("../utils/logger");

const getChatController = (req, res) => {
  if (req.session.user) {
    logger.info("Chat usario");
    return res.render("chat.hbs");
  } else return res.redirect("login");
};

module.exports = {
  getChatController,
};
