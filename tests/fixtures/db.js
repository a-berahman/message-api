const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const User = require('../../src/models/user')

const userOneID = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneID,
    email: 'test2@test.com',
    password: '12345678',
    tokens: [{
        token: jwt.sign({ _id:userOneID }, process.env.JWT_SECRET)
    }]
}

const setUpDataBase = async () => {
    await User.deleteMany(),
        await User(userOne).save()
}

module.exports = { setUpDataBase, userOne, userOneID }
