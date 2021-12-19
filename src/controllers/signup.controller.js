const express = require("express");
const {body , validationResult} = require('express-validator');
const User = require("../models/user.model");
const router = express.Router();



router.get("/",async (req,res) => {
    try{
       return  res.render("signup.ejs")
        
    }
   catch(e){
       return res.status(500).json({messege:e.messege})
   }
});

router.post("/", async (req,res) => {
    try{
       const userData = new User({
        signupFullName: req.body.signupFullName,
        signupEmail: req.body.signupEmail,
        signupMobileNumber: req.body.signupMobileNumber,
        signupPassword: req.body.signupPassword,
        gender: req.body.gender
       })
       const usersave = await userData.save() 
       res.status(201).render("signin",usersave)
    }
   catch(e){
       const alert = res.status(500).json(" User Already exist")
       alert()

   }
});

module.exports = router;