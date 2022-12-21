'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.hasMany(models.Bookingreservation, {
        foreignKey: "eventid",
      })

      // Event.hasMany(models.Contract, {
      //   foreignKey: "eventid",
      // })

      // Event.belongsToMany(models.TempEmployee, {
      //   through: {model: "tempemployee_event"},
      //   foreignKey: "eId",
      //   otherKey: "tId",
      // });
    }
  }
  Event.init({
    eventid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'event'
  });
  return Event;
};