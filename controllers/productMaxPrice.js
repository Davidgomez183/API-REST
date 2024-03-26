const Product = require('../models/product');

async function searchProductMax(req, res) {
    try {
        const productName = req.params.productName; 
        const maxPrice = req.query.maxPrice; // Obtener el parámetro de consulta maxPrice

        // Crear una expresión regular para buscar nombres que contengan la cadena proporcionada
        const regex = new RegExp(productName, 'i');

        // Construir la consulta para buscar productos por nombre y precio máximo
        const query = {
            name: regex,
            price: { $lte: parseFloat(maxPrice) } // Buscar productos con precio menor o igual al valor máximo
        };

        // Obtener los productos de la base de datos que coincidan con la consulta
        const products = await Product.find(query);
       
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
    searchProductMax,
};
