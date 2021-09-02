const { Router } = require('express')
const AppRouter = Router()
// import all controllers here
const controller = require('../controllers/Controller.js')

// post request to create username data
AppRouter.post('/users', controller.createUser)
// get request for username
AppRouter.get('/users/:userName', controller.userByName)

//post request to create playlist data
AppRouter.post('/users/:userName/playLists', controller.createPlaylist)

// post  request to get create song data by id
AppRouter.post('/users/songs', controller.createSong)

module.exports = AppRouter
