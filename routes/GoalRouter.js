const Router = require('express').Router()
const controller = require('../controllers/GoalController')

Router.post('/create/:user_id', controller.createGoal)
Router.delete('/delete/:goal_id', controller.deleteGoal)
Router.put('/update/:goal_id', controller.updateGoal)

module.exports = Router