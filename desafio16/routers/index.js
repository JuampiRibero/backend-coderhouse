const { Router } = require("express");
const router = Router();

const productsRouter = require("./productsRouter");
const chatRouter = require("./chatRouter");
const fakerRouter = require("./fakerRouter");
const sessionRouter = require("./sessionRouter");
const desafio16Router = require('./desafio16Router');
const noImplementada = require("./noImplementada");

router.use("/productos", productsRouter);
router.use("/chat", chatRouter);
router.use("/", fakerRouter);
router.use("/", sessionRouter);
router.use('/', desafio16Router);
router.use('*', noImplementada);

module.exports = router;
