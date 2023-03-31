const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const MealRouter = require('./MealRouter')
const UserRouter = require('./UserRouter')
const IngredientRouter = require('./IngredientRouter')
const GoalRouter = require('./GoalRouter')

Router.use('/auth', AuthRouter)
Router.use('/meal', MealRouter)
Router.use('/user', UserRouter)
Router.use('/ingredient', IngredientRouter)
Router.use('/goal', GoalRouter)

module.exports = Router