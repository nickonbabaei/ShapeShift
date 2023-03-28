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
      Meal.belongsTo( models.User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE'})
      // Meal.hasMany( models.ingredient, { foreignKey: 'ingredientId', onDelete: 'CASCADE', onUpdate: 'CASCADE'}) ASK HOW MEAL AND INGREDIENTS
      // WOULD WORK, IF I WANT TO HAVE AN ARRAY OF INGREDIENTS I WANT TO BE ABLE TO ACCESS IN EACH MEAL. 
    }
  }
  Meal.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredientId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ingredients',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Meal',
    tableName: 'meals'
  });
  return Meal;
};