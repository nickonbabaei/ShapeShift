const { Goal, User, Meal } = require('../models')

const getUser = async (req, res) => {
    try {
        let userId = req.params.user_id
        const user = await User.findByPk(userId, {
            include: [{ model: Goal}, {model: Ingredient}]
        })
        res.send(user)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getUser
}