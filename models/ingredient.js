'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ingredient.belongsToMany( models.Meal, { foreignKey: 'ingredientId', through: models.MealIngredient, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    }
  }
  Ingredient.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    servingSize: DataTypes.STRING,
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    protein: DataTypes.STRING,
    carbs: DataTypes.STRING,
    fat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ingredient',
    tableName: 'ingredients'
  });
  return Ingredient;
};