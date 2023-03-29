const Router = require('express').Router()
const controller = require('../controllers/MealController')

Router.post('/create', controller.createMeal)
Router.post('/assign-ingredient', controller.assignIngredient)

module.exports = Router