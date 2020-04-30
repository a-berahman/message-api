const express = require('express')
require('./db/mongoose')
const smsRouter = require('./routers/sms')
const userRouter = require('./routers/user')


const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(smsRouter)
app.use(userRouter)

module.exports=app