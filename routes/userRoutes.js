const express = require("express");
const {
  getUserController,
  updateUserController,
} = require("../controller/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const routes = express.Router();

routes.get("/getUser", authMiddleware, getUserController);

routes.put("/updateUser", authMiddleware, updateUserController);

module.exports = routes;
