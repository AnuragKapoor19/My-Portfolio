const message = require('../models/msgmodel')

const sendMsgController = async(req, res) =>{
    try {
        await message.create({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            message: req.body.message
        }).then(()=>{
            res.json({
                success: true,
            })
        }).catch(()=>{
            res.json({
                success: false
            })
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: 'Internal Server Error'
        })
    }
}

module.exports = sendMsgController