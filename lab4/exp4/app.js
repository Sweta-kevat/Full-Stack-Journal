// const marks = (marks) => {
//     const promise = new Promise((resolve, reject) => {
//         if (marks >= 1 && marks <= 33) {
//             reject("fail")
//         }
//         else if (marks > 33 && marks <= 49) {
//             resolve("pass")
//         }
//         else if (marks > 49 && marks <= 60) {
//             resolve("pass")
//         }
//         else if (marks > 60 && marks <= 100) {
//             resolve("pass")
//         }
//     })
//  return promise
// }
// marks(100).then((data) => console.log(data))
// .catch((error) =>console.log(error))

const fs = require("fs")

const stream = fs.createWriteStream("data.txt","utf-8")
const streamread = fs.createReadStream("data.txt","utf-8")

const express = require("express")

const eventEventEmitter = require("events")

const emitter = new eventEventEmitter()

let details = {
    stutes : false
}

emitter.on("student",(details)=>{

 console.log("hello",details.stutes?"true":"false")
})

emitter.emit("student",details)

streamread.on("data",(chunks)=>{
    console.log(chunks)
})

const app = express()
app.use(express.static("public"))

app.use(express.json())
const path = require("path")
 app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","index.html"))
 })


app.listen(8080,()=>{
  
console.log("running")
})



stream.write("samarth")
// const details = ()=>{
//   const promise = new Promise((resolve,reject)=>{
//     let obj = {
//     Name:"sitaram",
//     RollNo : "2408033",
//     Std :"Tybca"
//     }
//     const{Name,RollNo,Std} = obj
//     if(!obj){
//           reject("Error")
//     }
//     else{
//         resolve(`Name : ${Name}`+"\n"+`RollNo : ${RollNo}`+"\n"+`Std : ${Std}`+"\n")  
//       resolve()
//     }
//   })
//   return promise
// }


// details()
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))


const { buyProspective,
    FillAdmissionform,
    submitAdmissionform,
    answerTheExam,
    AdmissionSuccessfull,
    AdmissionProcess } = require("./admissionProcess.js")


buyProspective().then((data) => {
    console.log(data)
    FillAdmissionform().then((data) => {
        console.log(data)
        submitAdmissionform().then((data) => {
            console.log(data)
            answerTheExam().then((data) => {
                console.log(data)
                AdmissionSuccessfull().then((data) => {
                    console.log(data)
                })
            })
        })
    })
})    



function Process(){
  buyProspective().then((data) => {
       setTimeout(()=>{
        console.log(data)
       },1000) 
    })
      FillAdmissionform().then((data) => {
           setTimeout(()=>{
        console.log(data)
       },2000) 
    })
      submitAdmissionform().then((data) => {
         setTimeout(()=>{
        console.log(data)
       },3000) 
    })

      answerTheExam().then((data) => {
          setTimeout(()=>{
        console.log(data)
       },4000) 
    })
      buyProspective().then((data) => {
      setTimeout(()=>{
        console.log(data)
       },5000) 
    })
      AdmissionSuccessfull().then((data) => {
           setTimeout(()=>{
        console.log(data)
       },6000) 
    })

}
Process()