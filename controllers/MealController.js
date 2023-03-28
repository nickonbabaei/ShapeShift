const { Meal } = require('../models')


const getAllMeals = async (req, res) => {
    try {
        const meals = await Meal.findAll()
        res.send(meals)
    } catch (error) {
        throw error
    }
}

const getMeal = async (req, res) => {
    try {
        const id = req.params.meal_id
        const meal = await Meal.findByPk(id)
        res.send(meal)
    } catch (error) {
        throw error
    }
}

const createMeal = async (req, res) => {
    try {
        let mealBody = {
            ...req.body
        }
        let meal = await Meal.create(mealBody)
        res.send(meal)
    } catch (error) {
        throw error
    }
}

const deleteMeal = async (req, res) => {
    try {
        const id = req.params.meal_id
        await Meal.destroy(id)
        res.send({'message': `Meal with ID:${id} was deleted`})
    } catch (error) {
        throw error
    }
    
}

const updateMeal = async (req, res) => {
    try {
        const id = parseInt(req.params.meal_id)
        const updatedMeal = await Meal.update(req.body, {
            where: { id: id },
            returning: true
        })
        res.send(updatedMeal)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllMeals,
    getMeal,
    createMeal,
    deleteMeal,
    updateMeal

}