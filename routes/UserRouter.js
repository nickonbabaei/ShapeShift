const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/get/:user_id', controller.getUser)

module.exports = Router