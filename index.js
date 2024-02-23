const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');

const productRoute = require('./routes/product.route.js');

const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//routes
app.use('/api/products', productRoute);



mongoose.connect("mongodb+srv://pushkarupadhyay425:cqXLtsSvvAj53ymp@nodeapi.uzsnxql.mongodb.net/Node-API?retryWrites=true&w=majority" )
.then(() => {
    console.log('My DATABASE Connected!');
    app.listen(3000, () => {
        console.log('This is my server on port 3000');
    });
    
}).catch(() => {
    console.log('Error while connecting database');
});