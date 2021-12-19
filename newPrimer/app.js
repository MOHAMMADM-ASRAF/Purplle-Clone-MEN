const express = require("express")
const mongoose = require("mongoose")
const app = express()

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/Product");

}



//static file
app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"));


//view
app.set("views", "./view")
app.set("view engine" , "ejs")


app.get("", (req, res) => {
    res.render("product")
})


app.get("/offerForYou", (req, res) => {
  res.render("offerForYou");
});

//all product
app.get("/allProduct", (req, res) => {
  res.render("allProduct");
});



app.listen(3000, async() => {
    await connect()
    console.log("running on 3000")
})

