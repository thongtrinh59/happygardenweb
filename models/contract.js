// 'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contract.belongsTo(models.User, {
          foreignKey: "userid"
      });

      Contract.belongsTo(models.Customer, {
          foreignKey: "customerid"
      });

      Contract.belongsTo(models.Lobby, {
          foreignKey: "lobbyid"
      });

      Contract.belongsTo(models.Event, {
          foreignKey: "eventid"
      });

      Contract.belongsToMany(models.TempEmployee, {
        through: {model: "tempemployee_contract"},
        foreignKey: "contractid",
        otherKey: "tempemployeeid",
      });
    }
  }
  Contract.init({
    contractid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    customerid: DataTypes.INTEGER,
    contractvalue: DataTypes.INTEGER,
    deposit: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    eventid: DataTypes.INTEGER,
    lobbyid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contract',
    tableName: 'contract',
  });
  return Contract;
};