const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const { setUpDataBase, userOne, userOneID } = require('./fixtures/db')

beforeEach(setUpDataBase)

test('Should be signup a new user', async () => {

    const response = await request(app).post('/user').send({
        "name": "test",
        "email": "test@test.com",
        "password": "123456"
    }).expect(201)

    expect(response.body.password).not.toBe("123456")
})

test('Should be login existing user', async () => {
    const response = await request(app).post('/users/login').send(
        {
            "email": "test2@test.com",
            "password": "12345678"
        }
    ).expect(200)

    const user = await User.findById(userOneID)
    expect(response.body.token).toBe(user.tokens[0].token)

})


test('Should not login nonexistent user', async () => {
    const response = await request(app).post('/users/login').send(
        {
            "email": "test@test.com",
            "password": "1234"
        }
    ).expect(400)

})
