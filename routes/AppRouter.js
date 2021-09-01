const { Router } = require('express')
const AppRouter = Router()
// import all controllers here
const controller = require('../controllers/Controller.js')

// post request to create username data
AppRouter.post('/users', controller.createUser)
// get request for username
AppRouter.get('/users/:userName', controller.userByName)

//post request to create playlist data
AppRouter.post('users/:userName/playLists', controller.createPlaylist)

// get request to get playlist by id
AppRouter.get('/users/:userName/playLists/:id', controller.getPlaylistById)

module.exports = AppRouter
