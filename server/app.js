const mongoose = require('mongoose');
const Products = require('./schema');
const express = require('express');

mongoose.connect("mongodb://localhost:27017/sneackers")
    .then((res) => {
    })
    .catch((err) => console.log(err));

let app = express();

//app.use(express.json({ limit: '300mb' }));

//app.use(express.urlencoded({limit: '300mb'}));
app.get('/getProducts', (req, res) => {
    Products.find().exec()
        .then(products => {
            res.set('Access-Control-Allow-Origin', '*');
            res.send(products);
            console.log(products);
        })
        .catch(err => console.log(err));

});

app.post('/api', (req, res) => {

});

app.listen(5353);
//localhost:5353/getProducts