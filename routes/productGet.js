const express = require('express');
const Router = express.Router();
const productGetController = require('../controllers/productGetController');

// Ruta para crear un nuevo producto
Router.get('/:idProduct', productGetController.mostraProduct);

module.exports = Router;