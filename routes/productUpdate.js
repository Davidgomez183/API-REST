const express = require('express');
const Router = express.Router();
const productUpdateController = require('../controllers/productUpdateController');

// Ruta para crear un nuevo producto
Router.put('/:idProduct', productUpdateController.UpdateProduct); ///:idProduct es lo que se ha de poner en la funcion
//    const idProduct = req.params.idProduct; de esta manera para recuperarlo

module.exports = Router;