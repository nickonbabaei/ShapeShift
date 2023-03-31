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
      Goal.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    }
  }
  Goal.init({
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false
    },
    activity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    sex: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Goal',
    tableName: 'goals'
  });
  return Goal;
};