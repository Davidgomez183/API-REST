const Product = require('../models/product');

async function searchProduct(req, res) {
    try {
        const productName = req.params.productName; 
        // Crear una expresión regular para buscar nombres que contengan la cadena proporcionada
        const regex = new RegExp(productName, 'i'); // 'i' indica que la búsqueda sea insensible a mayúsculas y minúsculas
        // Obtener los productos de la base de datos cuyos nombres coincidan con la expresión regular
        const products = await Product.find({ name: regex });
       
        if (!products || products.length === 0) {
            // Si no se encontraron productos que coincidan con la búsqueda, retornar un error 404
            return res.status(404).json({ error: 'Productos no encontrados' });
        }

        // Si se encontraron productos, responder con los productos encontrados
        res.status(200).json({ products: products });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = {
    searchProduct,
};
