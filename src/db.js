const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect(`mongodb+srv://shweta:shweta@cluster0.u1tll.mongodb.net/allProducts`);
}

module.exports = connect;
// XgS4xYNdggmMLPgP - atlas password