const express = require('express');
const app = express();
const allProductController = require('./src/controllers/allproducts.controller');
const productPageController = require('./src/controllers/productPage.controller');
const cartController = require('./src/controllers/productCart.controller');

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

const connect = require('./src/configs/db');

app.set('view engine', 'ejs');
// app.use("/public", express.static('./src/public'));


app.use('/allproducts', allProductController);
app.use('/allproducts/cart', cartController);
app.use('/allproducts/:id', productPageController);



app.listen(5555, (req, res) =>{
    connect();
    console.log("Listening on port 5555");
})