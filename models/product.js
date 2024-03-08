const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema ({

    name: {
        type: String,
        require:true,
    },

    description: {
        type: String,
        require:true,
    },

    price: {
        type: Number,
        require:true,
    },

    stock: {
        type: Boolean,
        require: false,
        default: false,
    },

    category: {
        type: String,
        required: true,
    },

    manufacturer: {
        type: String,
        required: true,
    },


});

module.exports = mongoose.model("productes",ProductSchema);
