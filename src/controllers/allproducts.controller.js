const express = require('express');
const router = express.Router();


const allProducts = require('../models/allproducts.model');
// router.post('/', async (req, res) => {
//     try{
//         const product = await allProducts.create(req.body);
//         console.log("New Product Added!");
//         return res.status(201).send(product);
//     }
//     catch(e){
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });

router.get('/', async function (req, res) {
    try{
        const products = await allProducts.find().lean().exec();
        return res.render("allProducts.ejs", {products});
        // return res.status(201).send(products);
    }
    catch(e){
        return res.status(400).json({message: e.message, status: "Failed"});
    }
});



module.exports = router;


// // student crud
// router.post("/", async (req, res) =>{
//     try{
//         const student = await Student.create(req.body);
//         console.log("New student created!");
//         return res.status(201).send(student);
//     }
//     catch(e){
//         return res.status(500).json( {message: e.message, status: "Failed"} );
//     }
// });
// router.get("/", async (req, res) =>{
//     try{
//         const students = await Student.find().populate("user_id").lean().exec();
//         console.log("Got the students complete info");
//         return res.status(201).send( { students } );
//     }
//     catch(e){
//         return res.status(500).json( {message: e.message, status: "Failed"} );
//     }
// });

// module.exports = router;