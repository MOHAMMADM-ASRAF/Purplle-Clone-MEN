const express = require('express');
const router = express.Router();
const productModel = require('../models/productsfetch.model');


router.get('/',async (req,res) => {
    try {
       
       return await res.render('home.ejs')

    } catch(e) {
        return res.status(500).json({message:"server is not able to connect to the database"});
    }
})


router.get('/product',async (req,res) => {
    try {
       
       return await res.render('product.ejs')

    } catch(e) {
        return res.status(500).json({message:"server is not able to connect to the database"});
    }
})

router.get('/checkout',async (req,res) => {
    try {
       
       return await res.render('checkout.ejs')

    } catch(e) {
        return res.status(500).json({message:"server is not able to connect to the database"});
    }
})

router.get('/newaddress',async (req,res) => {
    try {
       
       return await res.render('newaddress.ejs')

    } catch(e) {
        return res.status(500).json({message:"server is not able to connect to the database"});
    }
})

router.get('/payment',async (req,res) => {
    try {
       
       return await res.render('payment1.ejs')

    } catch(e) {
        return res.status(500).json({message:"server is not able to connect to the database"});
    }
})

router.get('/sucess',async (req,res) => {
    try {
       
       return await res.render('paySucessful.ejs')

    } catch(e) {
        return res.status(500).json({message:"server is not able to connect to the database"});
    }
})







// router.get('/products',async (req,res) => {
//     try {

//         // console.log(req.query)
//         let query = req.query.q;
//         let products = await productModel.find({product_name:query}).lean().exec();
//     //   console.log(products)
      
//        return res.status(200).get({products})

//     } catch(e) {
//         return res.status(500).json({message:"server is not able to connect to the database"});
//     }
// })





module.exports = router;