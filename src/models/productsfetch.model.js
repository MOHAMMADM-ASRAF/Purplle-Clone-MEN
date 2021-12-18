const {Schema,model} = require('mongoose');


const productSchema = new Schema({
    id:{type:String,required:true},
    product_name:{type:String,required:true},
    price:{type:String,required:true},
    image:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})

module.exports = model('product',productSchema)