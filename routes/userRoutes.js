const express = require("express");
const { getUserController } = require("../controller/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const routes = express.Router();

routes.get("/getUser", authMiddleware, getUserController);

module.exports = routes;
