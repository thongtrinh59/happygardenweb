// 'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lobby extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
	  	Lobby.hasMany(models.Bookingreservation, {
			  foreignKey: "lobbyid",
		  })

      // Lobby.hasMany(models.Contract, {
			//   foreignKey: "lobbyid",
		  // })
    }
  }
  Lobby.init({
    lobbyid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    lobbyname: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Lobby',
    tableName: 'lobby',
  });
  return Lobby;
};