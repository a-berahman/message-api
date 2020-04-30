const express = require('express')
const { send } = require('../utils/kavenegar')
const { auth } = require('../middleware/auth')

const router = new express.Router()


router.post('/send/sms', auth, async (req, res) => {
    try {
        send(req.body.to, req.body.message)
        res.status(200).send()
    } catch (error) {
        res.status(400).send()
    }
})


module.exports = router