const express = require('express');
const Router = express.Router();
const DeleteProductController = require('../controllers/productDeleteController');

// Importar el middleware de autenticación
const { authenticateToken } = require('../authentication');

// Ruta para eliminar un producto específico
Router.delete('/:productId',authenticateToken, DeleteProductController.ProductDelete);

module.exports = Router;

