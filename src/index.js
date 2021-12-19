const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));





const homeController = require('./controllers/home.controllers')
// const prodController = require('./controllers/prod.controllers')
const productController= require('./controllers/products.controllers')

const signinController = require("./controllers/signin.controller")
const signupController = require("./controllers/signup.controller")


const allProductController = require('./controllers/allproducts.controller');
const productPageController = require('./controllers/productPage.controller');
const cartController = require('./controllers/productCart.controller');







//View Engine EJS & Setting Views & Static Files:
app.set("view engine", "ejs");
app.set("views", './src/views');
app.use("/public", express.static('./src/public'));





app.use('/',homeController)
// app.use('/prod',prodController)
app.use('/products',productController)





app.use('/signin',signinController)
app.use('/signup',signupController)

app.use('/allproducts', allProductController);
app.use('/allproducts/cart', cartController);
app.use('/allproducts/:id', productPageController);



const connect = require('./configs/db');

app.listen(8585,async () => {
    await connect();
    console.log("server is running at port 8585")
})