'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Meal.belongsToMany( models.User, { foreignKey: 'mealId', through: models.MealIngredient, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
      // Meal.belongsToMany( models.Ingredient, { foreignKey: 'mealId', through: models.MealIngredient, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
      // Meal.hasMany( models.ingredient, { foreignKey: 'ingredientId', onDelete: 'CASCADE', onUpdate: 'CASCADE'}) ASK HOW MEAL AND INGREDIENTS
      // WOULD WORK, IF I WANT TO HAVE AN ARRAY OF INGREDIENTS I WANT TO BE ABLE TO ACCESS IN EACH MEAL. 
    }
  }
  Meal.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Meal',
    tableName: 'meals'
  });
  return Meal;
};