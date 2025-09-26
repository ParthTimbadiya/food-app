const express = require("express");
const {
  getUserController,
  updateUserController,
  resetPasswordController,
} = require("../controller/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const routes = express.Router();

routes.get("/getUser", authMiddleware, getUserController);

routes.put("/updateUser", authMiddleware, updateUserController);

routes.post("/resetPassword", authMiddleware, resetPasswordController)

module.exports = routes;
