const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product: { type: String, required: true },
    category: {type:String, requiredd: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
