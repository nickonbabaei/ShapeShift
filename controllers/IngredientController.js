const { Ingredient } = require('../models')
require('dotenv').config()

const getAllIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.findAll()
        res.send(ingredients)
    } catch (error) {
        throw error
    }
}

const getIngredient = async (req, res) => {
    try {
        const id = req.params.ingredient_id
        const ingredient = await Ingredient.findByPk(id)
        res.send(ingredient)
    } catch (error) {
        throw error
    }
}

const createIngredient = async (req, res) => {
    try {
        let ingredientBody = {
            ...req.body
        }
        let ing = await Ingredient.create(ingredientBody)
        res.send(ing)
    } catch (error) {
        throw error
    }
}

const deleteIngredient = async (req, res) => {
    try {
        const id = req.params.ingredient_id
        await Ingredient.destroy({
            where: {id: id}
        })
        res.send({ 'message': `Ingredient with ID:${id} was deleted` })
    } catch (error) {
        throw error
    }

}

const updateIngredient = async (req, res) => {
    try {
        const id = parseInt(req.params.ingredient_id)
        const updatedIngredient = await Ingredient.update(req.body, {
            where: { id: id },
            returning: true
        })
        res.send(updatedIngredient)
    } catch (error) {
        throw error
    }
}




module.exports = {
    getAllIngredients,
    getIngredient,
    deleteIngredient,
    createIngredient,
    updateIngredient,

}