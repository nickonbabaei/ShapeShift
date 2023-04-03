const Router = require('express').Router()
const controller = require('../controllers/IngredientController')

Router.post('/create', controller.createIngredient)
Router.delete('/delete/:ingredient_id', controller.deleteIngredient)


module.exports = Router