const fs = require("fs")
const cron = require("node-cron")



// cron.schedule("*/1 * * * *",()=>{
//  const stream = fs.createWriteStream("pokemon","utf-8")
//  stream.write("hello")
//  console.log("created ")
// })


// cron.schedule("*/1 * * * *",()=>{
//  setTimeout(()=>{
//    fs.unlink("pokemon",(err)=>{
//     console.log("deleted")
//  })
//  },5000)   
// })

console.log("start")
console.log("1")
fs.readFile("data.txt","utf-8",(err,chunks)=>{
  console.log(chunks)
})
console.log("2")
console.log("3")
console.log("4")

const data = fs.readFileSync("data2.txt","utf-8");

console.log(data)
console.log("5")
console.log("end")

