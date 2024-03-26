const express = require('express');
const Router = express.Router();
const productMaxController = require('../controllers/productMaxPrice');

// Ruta para crear un nuevo producto
Router.get('/:productName', productMaxController.searchProductMax);

module.exports = Router;