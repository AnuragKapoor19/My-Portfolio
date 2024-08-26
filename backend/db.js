const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const URI = process.env.URI

const mongoDb = async()=>{
    await mongoose.connect(URI).then(()=>{
        console.log("Database Connected")
    }).catch(error => {
        console.log("Error in database", error.message)
    })
}

module.exports = mongoDb