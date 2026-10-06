
// fs.readFile("pok.txt","utf-8",(error,value)=>{
//     console.log(value)
// })

let fs = require("fs")


// const { request } = require("https")
// const console = require("console")
// const { error } = require("console")

const express = require("express")

const app = new express()

const writeStream = fs.createWriteStream("pok.txt")
const writeStream2 = fs.createWriteStream("mega.txt","utf-8")

process.stdin.pipe(writeStream2)

process.stdin.on("data",(data)=>{
     console.log("This name is => ",data.toString())
})
// writeStream2.write("pokemon1"+"\n")
// writeStream2.write("_______________"+"\n")
// writeStream2.write("pokemon2"+"\n")
// writeStream2.write("_______________"+"\n")
// writeStream2.write("pokemon3"+"\n")



writeStream.close()
const readStream = fs.createReadStream("pok.txt",{
      encoding:"utf-8",
      highWaterMark:100
})


app.get("/details",(req,res)=>{
      const {id,name,rollno} = req.query;  
      let obj = {
        id:id,
        name : name,
        rollno : rollno
      }   
    res.send(obj)
    let data = `${id} ${name} ${rollno} `
    writeStream.write(data)
   readStream.on("read",(data)=>{
         console.log(data)
    })


 readStream.emit("read",data) 
   
})


app.listen(8080,()=>{
    console.log("Port Running")
}
)






for(let i = 5 ; i>0 ; i--){
    let str = ""
  for(let j = i ; j > 0 ; j--){
    str+=" * "
  }
  console.log(str)
 
}