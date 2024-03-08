const Product = require('../models/product');

async function listarProductos(req, res) {
    try {
        // Obtener todos los productos de la base de datos
        const productos = await Product.find();

        res.status(200).json({ products: productos });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = {
    listarProductos,
};
