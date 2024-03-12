const Product = require('../models/product');

async function mostraProduct(req, res) {
    try {
        const idProduct = req.params.idProduct;
         // Obtener el producto de la base de datos por su ID
         const product = await Product.findById(idProduct);
       
        res.status(200).json({ product: product });
    } catch (error) {
        console.error('Error al obtener el product:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = {
    mostraProduct,
};
