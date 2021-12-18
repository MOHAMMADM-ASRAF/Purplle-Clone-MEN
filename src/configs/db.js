const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://mahboob:mahboob@cluster0.pzug5.mongodb.net/purplle_api_deb?retryWrites=true&w=majority")
}