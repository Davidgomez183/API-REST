const express = require('express');
const Router = express.Router();
const DeleteProductController = require('../controllers/productDeleteController');

// Ruta para eliminar un producto específico
Router.delete('/:productId', DeleteProductController.ProductDelete);

module.exports = Router;