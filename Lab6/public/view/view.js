const express=require("express");
const path = ("path");
uIRoute.get("/",(req,res)=>{
    res.sendFile(createUIPath("index.html"))
})
const createUTPath=(filename)=>{
    return path.join(___dirname,viewDirectory,fileName);
}

module.exports=uIRoute;
