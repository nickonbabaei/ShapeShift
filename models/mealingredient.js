'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MealIngredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MealIngredient.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    mealId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'meals',
        key: 'id'
      }
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ingredients',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'MealIngredient',
    tableName: 'mealingredients'
  });
  return MealIngredient;
};