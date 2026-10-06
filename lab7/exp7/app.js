const express = require("express")
const cron = require("node-cron")
const app = express()

cron.schedule("*/1 * * * *",()=>{
  console.log("hey",new Date())
})


