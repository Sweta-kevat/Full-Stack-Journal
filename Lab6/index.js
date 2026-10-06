const express = require("express");
const app=  express()

app.get("/student",(req,res)=>{
        res.send("student")
    })

app.post("/save",(req,res)=>{
    req.send("student saved")
})

app.get("/get",(req,res)=>{
    req.send("student data")
})


app.listen(8000,()=>{
    console.log("server is running on port 8000")
})