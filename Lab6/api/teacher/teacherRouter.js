const express = require("express");
const router =  express.Router();


router.get("/gettheinfo",(req,res)=>{
    req.send("teacher info")
});



router.post("/save",(req,res)=>{
    req.send("teacher info saved")
});

module.exports=router;