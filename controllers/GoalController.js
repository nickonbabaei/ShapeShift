const { Goal, User } = require('../models')
const user = require('../models/user')

const createGoal = async (req, res) => {
    try {
        const userId = req.params.user_id
        let goalBody = {
            userId,
            ...req.body
        }
        let goal = await Goal.create(goalBody)
        res.send(post)
    } catch (error) {
        throw error
    }
}

const getGoal = async (req, res) => {
    try {
        let id = parseInt(req.params.goal_id)
        const goal = await Goal.findByPk(id, {
            include: [{ model: User }]
        })
        res.send(goal)
    } catch (error) {
        throw error
    }
}

const updateGoal = async (req, res) => {
    try {
        let goalId = parseInt(req.params.post_id)
        let updatedGoal = await Goal.update(req.body, {
            where: { id: goalId },
            returning: true
        })
        res.send(updatedGoal)
    } catch (error) {
        throw error
    }
}

module.exports = {
    createGoal,
    getGoal,
    updateGoal
}