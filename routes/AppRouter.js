const { Router } = require('express')
const AppRouter = Router()

AppRouter.get('/', (request, response) => {
  response.send({ msg: 'Server Running' })
})

module.exports = AppRouter
