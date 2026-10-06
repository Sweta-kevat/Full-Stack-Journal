const express = require("express");
const router =  express.Router()
const teacherRouter = require("./api/teacher/teacherRouter");
const studentRouter = require("./api/student/studentRouter");


router.get("/",(req,res)=>{
        req.send("API called")
    })


module.exports=router;