const express = require("express");
const router = express.Router();

const allProducts = require('../models/allproducts.model');

router.get('/', async function(req, res) {
    try{
        let product = await allProducts.findOne(req.params.id).lean().exec();
       return res.render("productPage.ejs");
        // return res.status(201).send(product);
    }
    catch(e)
    {
        return res.status(400).json({message: e.message, status: "Failed"});
    }
});

module.exports = router;