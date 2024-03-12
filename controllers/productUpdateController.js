const Product = require('../models/product');

async function UpdateProduct(req, res) {
    const idProduct = req.params.idProduct;
    const params = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(idProduct, params, { new: true });

            if (!updatedProduct) {
            return res.status(400).send({ msg: "Error: no se ha podido actualizar el producto" });
        }

        res.status(200).send({ msg: "El producto se ha actualizado correctamente", updatedProduct });
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).send({ msg: "Error interno del servidor al actualizar el producto" });
    }
}

module.exports = {
    UpdateProduct,
};

