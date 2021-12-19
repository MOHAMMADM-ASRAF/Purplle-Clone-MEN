const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.set("view engine", "ejs");
app.set("views", './src/views');
app.use("/public", express.static('./src/public'));




const connect = require('./configs/db');

app.listen(8585,async () => {
    await connect();
    console.log("server is running at port 8585")
})