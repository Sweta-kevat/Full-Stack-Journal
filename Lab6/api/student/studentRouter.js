const express = require("express");
const router =  express.Router();


router.get("/gettheinfo",(req,res)=>{
    req.send("student info")
});



router.post("/save",(req,res)=>{
    req.send("student info saved")
});

module.exports=router;