// 'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TempEmployee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TempEmployee.belongsToMany(models.Contract, {
        through: {model: "tempemployee_contract"},
        foreignKey: "tempemployeeid",
        otherKey: "contractid",
      });
    }
  }
  TempEmployee.init({
    tempemployeeid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    nationalid: DataTypes.STRING
    }, {
    sequelize,
    modelName: 'TempEmployee',
    tableName: 'tempemployee'
  });
  return TempEmployee;
};