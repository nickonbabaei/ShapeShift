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
      Ingredient.belongsTo( models.User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    }
  }
  Ingredient.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    servingSize: DataTypes.STRING,
    calories: {
      type: DataTypes.STRING,
      allowNull: false
    },
    protein: DataTypes.STRING,
    carbs: DataTypes.STRING,
    fat: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    servingInfo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ingredient',
    tableName: 'ingredients'
  });
  return Ingredient;
};