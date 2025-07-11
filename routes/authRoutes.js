const express = require('express');
const { registerController, loginController } = require('../controller/authController');

const routes = express.Router();

// register
routes.post('/register', registerController)

// Loin
routes.post('/login', loginController)

module.exports = routes;