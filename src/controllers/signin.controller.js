const express = require("express");
const User = require("../models/user.model");
const router = express.Router();



router.get("/", (req,res) => {
    try{
       return  res.render("signin")
        
    }
   catch(e){
       return res.status(500).json({messege:e.messege})
   }
});


router.post("/", async(req,res) => {
    try{
       const mobile = req.body.mobile;
       const userMobile = await User.findOne({signupMobileNumber:mobile});

       if(!userMobile){
           res.status(201).render("signup")
       }else{
           res.status(201).render("home")
       }
    }
   catch(e){
       return res.status(500).json({messege:e.messege})
   }
});
module.exports = router;