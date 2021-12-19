const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://shweta:shweta@cluster0.u1tll.mongodb.net/allProducts")
}