
const express = require("express");


const Product = require("../module/product.module");

const router = express.Router();


router.get("/products", async (req, res) => {
  const product = await Product.find().lean().exec();

  return res.render("primer.ejs", {
    product: product,
  });
});



module.exports = router;