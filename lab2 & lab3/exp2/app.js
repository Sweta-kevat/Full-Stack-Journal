const express = require("express")
const app = express()
const fs = require("fs")
const { SimpleIntrest, CompoundIntrest } = require("./math")
const { error } = require("console")


app.get("/SimpleIntrest", (req, res) => {
    const { Amount, ROI, Time } = req.query
    let SI = SimpleIntrest(Amount, ROI, Time)
    let cal = (Amount * ROI * Time) / 100
    fs.appendFile("data.txt", cal.toString() + "\n", (err) => {

    })

    let read = fs.readFileSync("data.txt", "utf-8", (err) => {
        if (err) {
            console.log("Not able to Write", err)
        }

    })
    console.log(read)
    res.send(SI)
})






app.get("/CompoundIntrest", (req, res) => {
    const { Annual, P, ROI, N, Time } = req.query

    let CI = CompoundIntrest(Annual, P, ROI, N, Time)
    fs.watchFile("data.txt", CI, (err) => {
        if (err) {
            console.log("Not able to Write", res)
        }
    })
    console.log(CI)
    res.send(CI)
})

app.post("/details", (req, res) => {

})

app.listen(8080, () => {
    console.log("server running on port 8080")
})
