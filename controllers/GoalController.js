const { Goal, User } = require('../models')

const createGoal = async (req, res) => {
    try {
        const userId = req.params.user_id
        if (req.body.sex === 'male') {
            let calories = Math.round(66.5 + ((13.75*parseInt(req.body.weight)) + (5 * parseInt(req.body.height)) - (6.75*parseInt(req.body.age)))) + parseInt(req.body.description)
            let goalBody = {
                userId,
                calories,
                ...req.body
            }
            let goal = await Goal.create(goalBody)
            res.send(goal)
        } else {
            let calories = Math.round(655.1 + ((9.563*parseInt(req.body.weight)) + (1.85 * parseInt(req.body.height)) - (4.676*parseInt(req.body.age)))) + parseInt(req.body.description)
            let goalBody = {
                userId,
                calories,
                ...req.body
            }
            let goal = await Goal.create(goalBody)
            res.send(goal)
        }
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

const deleteGoal = async (req, res) => {
    try {
        const id = req.params.goal_id
        await Goal.destroy({ where: { id: id } })
        res.send({ msg: `deleted with an id of ${id}` })
    } catch (error) {
        
    }
}

module.exports = {
    createGoal,
    getGoal,
    updateGoal,
    deleteGoal
}