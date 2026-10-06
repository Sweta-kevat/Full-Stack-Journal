const express = require("express");
const PORT =3000;
const app=  express()
const api_router = require("./apiRouter");


app.listen("PORT",()=>{
    console.log(`Application running on port ${PORT}`);
    });

app.use("/api",api_router)

app.get("/",(req,res)=>{
        console.log(req.header);
        req.send("hello world")
    })
