const express = require('express');
const Router = express.Router();
const CreateProductController = require('../controllers/product');

// Ruta para crear un nuevo producto
Router.post('/', CreateProductController.crearProducto);

module.exports = Router;
