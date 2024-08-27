const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoDb = require("./db")
dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()
const path = require('path')

app.use(cors())

app.use(express.json())

app.use(express.static(path.join(__dirname, '../frontend/build')))

app.use("/api",require('./routes/portfolioRoute'))

app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`)
    mongoDb()
})