const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: Number,  // Precio original, opcional si no hay descuento
    desc: String,
    category: { type: String, required: true },
    img: String,
    
});

module.exports = model('producto', productoSchema);
