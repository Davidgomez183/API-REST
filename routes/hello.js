const express = require('express');
const Router = express.Router();
const HelloController = require('../controllers/hello');

Router.get("/", HelloController.getHello);

module.exports = Router;

