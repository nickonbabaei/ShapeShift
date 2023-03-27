'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Goal.init({
    age: DataTypes.INTEGER,
    weight: DataTypes.STRING,
    height: DataTypes.STRING,
    activity: DataTypes.STRING,
    description: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Goal',
    tableName: 'goals'
  });
  return Goal;
};