// const mongoose = require("mongoose")

// const productSchema = new mongoose.Schema({
//     Image_url: { type: String, required: true },
//     P_name: { type: String, required: true },
//     P_price:{type:Number , required :true}
// })

// const ProductDetails = mongoose.model("productDetails", productSchema)

// module.exports = ProductDetails



const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  image_url: { type: String, required: true },
  P_name: { type: String, required: true },
  P_price: { type: Number, required: true },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product