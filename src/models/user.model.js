const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    gender:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{
    versionKey:{type:String,required:true},
    timestamps:{type:String,required:true}
})

module.exports = model('user',userSchema)