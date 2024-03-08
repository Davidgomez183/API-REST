const Product = require('../models/product');

async function ProductDelete(req, res) {
    const productId = req.params.productId; // Suponiendo que recibes el ID del producto a borrar como un parámetro en la URL
    
    try {
        // Buscar el producto por su ID y borrarlo
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Producto no encontrado ID' });
        }
        
        return res.status(200).json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        console.error('Error al borrar el producto:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = {
    ProductDelete,
};
