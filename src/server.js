const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Connecting To Database:
const connect = require('./configs/db');
const User = require('./models/user.model');

const signinController = require("./controllers/signin.controller")
app.use('/signin',signinController)
const signupController = require("./controllers/signup.controller")
app.use('/signup',signupController)
//View Engine EJS & Setting Views & Static Files:
app.set("view engine", "ejs");
app.set("views", './src/views');

app.use("/public", express.static('./src/public'));
// port ke liye
let port = process.env.PORT || 2728;


app.listen(port, async () => {
try {
 await connect();
 console.log(`Listening On Port ${port}...`);
 }
catch (err) {
 console.log(`Error! Database Not Connected.`);
}
});