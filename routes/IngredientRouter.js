const Router = require('express').Router()
const controller = require('../controllers/IngredientController')

Router.post('/create', controller.createIngredient)

module.exports = Router