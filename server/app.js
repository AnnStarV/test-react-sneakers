const mongoose = require('mongoose');
const { Products, CartItem, FavItem, Orders } = require('./schema');
const express = require('express');
const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/sneackers")
    .then((res) => {
    })
    .catch((err) => console.log(err));

let app = express();
app.use(cors()); // Добавьте эту строку для использования CORS
app.use(express.json());

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

app.get('/orders', (req, res) => {
    Orders.find().exec()
        .then(orders => {
            res.set('Access-Control-Allow-Origin', '*');
            res.send(orders);
            console.log(orders);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

app.post('/orders', (req, res) => {
    const newOrder = new Orders(req.body);
    if (!newOrder.total && Array.isArray(newOrder.items)) {
        newOrder.total = newOrder.items.reduce((sum, item) => sum + item.price, 0);
        newOrder.tax = Math.round(newOrder.total * 0.02); 
    }
    
    newOrder.orderNumber = 'ORD-' + Date.now().toString().slice(-5); 
    newOrder.save()
        .then((savedOrder) => {
            res.set('Access-Control-Allow-Origin', '*');
            res.status(201).send(savedOrder); // savedOrder содержит _id
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

app.post('/cart', (req, res) => {
    const newCartItem = new CartItem(req.body);

    newCartItem.save()
        .then(() => {
            res.set('Access-Control-Allow-Origin', '*');
            res.status(201).send(newCartItem);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

app.get('/cart', (req, res) => {
    CartItem.find().exec()
        .then(cartItems => {
            res.set('Access-Control-Allow-Origin', '*');
            res.send(cartItems);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

app.delete('/cart', async (req, res) => {
    try {
        await CartItem.deleteMany({});
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/cart/:id', (req, res) => {
    CartItem.findByIdAndDelete(req.params.id).exec()
        .then(() => {
            res.set('Access-Control-Allow-Origin', '*');
            res.status(204).send();
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

app.post('/favorites', (req, res) => {
    const newFavItem = new FavItem(req.body);
    newFavItem.save()
        .then(() => {
            res.set('Access-Control-Allow-Origin', '*');
            res.status(201).send(newFavItem);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

app.get('/favorites', (req, res) => {
    FavItem.find().exec()
        .then(FavItems => {
            res.set('Access-Control-Allow-Origin', '*');
            res.send(FavItems);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

app.delete('/favorites/:id', (req, res) => {
    FavItem.findByIdAndDelete(req.params.id).exec()
        .then(() => {
            res.set('Access-Control-Allow-Origin', '*');
            res.status(204).send();
        })
        .catch(err => {
            res.status(500).send(err);
        });
});



app.listen(5353);
//localhost:5353/getProducts