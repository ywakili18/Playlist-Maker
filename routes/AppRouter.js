const { Router } = require('express')
const AppRouter = Router()
// import all controllers here
const controller = require('../controllers/Controller.js')

// post request to create username data
AppRouter.post('/users', controller.createUser)

// post request to show playlist genre of music
// AppRouter.post('/playlist', controller.createRapPlaylist)

module.exports = AppRouter
