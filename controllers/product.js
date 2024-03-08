const Product = require('../models/product');

async function crearProducto(req, res) {
    try {
        const { name, description, price, stock, category, manufacturer } = req.body;

        // Crear una nueva instancia de Product utilizando el modelo definido con Mongoose
        const nuevoProducto = new Product({
            name,
            description,
            price,
            stock,
            category,
            manufacturer
        });

        // Guardar el nuevo producto en la base de datos
        await nuevoProducto.save();

        res.status(201).json({ message: 'Producto creado exitosamente', product: nuevoProducto });
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = {
    crearProducto,
};