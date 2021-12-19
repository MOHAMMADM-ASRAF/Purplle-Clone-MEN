const express = require("express")
const mongoose = require("mongoose")

//connection
const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/Product");
};


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs")
app.use(express.static("./public"));

// getting product
const productControllers = require("./controllers/products.controllers")


// method + route
app.use("", productControllers)




app.listen(process.env.PORT || 4444, async function () {
  await connect();
  console.log("listening on port 4444");
});






// app.post("/products", async (req, res)=>{
//   const prod = await Product.create(req.body)

//   res.status(201).send(prod)
// })


// app.get("/products", async(req, res)=>{
//   const prod = await Product.find()

//   res.status(200).send(prod)
// })

// app.listen(4444, async () => {
//     await connect()
//     console.log("we are on port 4444")
// })





