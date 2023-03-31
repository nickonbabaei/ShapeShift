const Router = require('express').Router()
const controller = require('../controllers/IngredientController')

Router.post('/create', controller.createIngredient)
Router.get('/somethingsuperrandom', controller.getFoodDatabase)

module.exports = Router