const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const MealRouter = require('./MealRouter')
const UserRouter = require('./UserRouter')
const IngredientRouter = require('./IngredientRouter')

Router.use('/auth', AuthRouter)
Router.use('/meal', MealRouter)
Router.use('/user', UserRouter)
Router.use('/ingredient', IngredientRouter)

module.exports = Router