//User Model:

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    signupFullName : {type:String,required:true},
    signupEmail : {type:String,required:true, unique: true},
    signupMobileNumber : {type:Number,required:true, unique: true},
    signupPassword : {type:String,required:true},
    gender : {type:String,required:true},
},
{
    versionKey:false,
    timestamps: true
})

const User = mongoose.model("user",userSchema);

module.exports = User;

