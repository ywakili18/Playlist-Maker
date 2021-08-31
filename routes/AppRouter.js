const { Router } = require('express')
const AppRouter = Router()
// import all controllers here
const controller = require('../controllers/Controller.js')
//create get, post, delete request here
AppRouter.get('/getexamplerouter', controller.GetExample)

module.exports = AppRouter
