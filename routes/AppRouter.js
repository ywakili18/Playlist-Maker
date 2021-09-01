const { Router } = require('express')
const AppRouter = Router()
// import all controllers here
const controller = require('../controllers/Controller.js')

// post request to create username data
AppRouter.post('/users', controller.createUser)

// get request for username
AppRouter.get('/users/:userName', controller.userByName)
module.exports = AppRouter
