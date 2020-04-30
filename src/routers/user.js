const express = require('express')
const User = require('../models/user')
const router = new express.Router()


router.post('/user', async (req, res) => {
    const userBody = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    const user = new User(userBody)
    try {
        await user.save()

        const token = await user.generateAuthToken()

        res.status(201).send({ user, token })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()

        res.status(200).send({ user, token })
    } catch (error) {
        res.status(400).send()
    }

})

module.exports = router