const express = require('express');
const Router = express.Router();
const productListController = require('../controllers/productListController');

// Ruta para crear un nuevo producto
Router.get('/', productListController.listarProductos);

module.exports = Router;