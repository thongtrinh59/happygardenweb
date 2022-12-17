const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Bookingreservation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Bookingreservation.belongsTo(models.User, {
                foreignKey: "userid"
            });

            Bookingreservation.belongsTo(models.Customer, {
                foreignKey: "customerid"
            });

            Bookingreservation.belongsTo(models.Lobby, {
                foreignKey: "lobbyid"
            });

            Bookingreservation.belongsTo(models.Status, {
                foreignKey: "statusid"
            });

            Bookingreservation.belongsTo(models.Event, {
                foreignKey: "eventid"
            });
        }
    }
    Bookingreservation.init({
        bookingid: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userid: DataTypes.INTEGER,
        customerid: DataTypes.INTEGER,
        lobbyid: DataTypes.INTEGER,
        statusid: DataTypes.INTEGER,
        eventid: DataTypes.INTEGER,
        numberoftalbes: DataTypes.INTEGER,
        numberofguests: DataTypes.INTEGER,
        description: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "Bookingreservation",
        tableName: 'bookingreservations',
    });
    return Bookingreservation;
};
