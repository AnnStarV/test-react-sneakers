// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const products = new Schema({
    title: String,
    price: Number,
    image: String
});

const cart = new Schema({
    title: String,
    price: Number,
    image: String
});

const favorites = new Schema({
    title: String,
    price: Number,
    image: String
});

const Products = mongoose.model('products', products, 'products');
const CartItem = mongoose.model('cart', cart, 'cart');
const FavItem = mongoose.model('favorites', favorites, 'favorites');

module.exports = { Products, CartItem, FavItem };