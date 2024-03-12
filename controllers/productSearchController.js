const Product = require('../models/product');

async function searchProduct(req, res) {
    try {
        const productName = req.params.productName; // Suponiendo que el nombre del producto está en los parámetros de la solicitud
        // Obtener el producto de la base de datos por su nombre
        const product = await Product.findOne({ name: productName });
       
        if (!product) {
            // Si no se encontró ningún producto con el nombre proporcionado, retornar un error 404
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        // Si se encuentra el producto, responder con el producto encontrado
        res.status(200).json({ product: product });
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = {
    searchProduct,
};
