const express = require("express")
const sendMsgController = require("../controllers/portfolioController")
const router = express.Router()

router.post("/sendMsg",sendMsgController)

module.exports = router