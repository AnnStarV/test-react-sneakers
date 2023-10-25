// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const products = new Schema({
    title: String,
    price: Number,
    image: String
});

module.exports = mongoose.model('products', products, "products");
