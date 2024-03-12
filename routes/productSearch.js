const express = require('express');
const Router = express.Router();
const productSearchController = require('../controllers/productSearchController');

// Ruta para crear un nuevo producto
Router.get('/:productName', productSearchController.searchProduct);

module.exports = Router;