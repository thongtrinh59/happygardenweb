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

            Bookingreservation.hasOne(models.Contract, {
                foreignKey: "bookingid"
            });

            Bookingreservation.belongsTo(models.Menu, {
                foreignKey: "menuid"
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
        statusid: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        eventid: DataTypes.INTEGER,
        numberoftables: DataTypes.INTEGER,
        numberofguests: DataTypes.INTEGER,
        set: DataTypes.INTEGER,
        description: DataTypes.STRING,
        fromdate: DataTypes.DATE,
        todate: DataTypes.DATE,
        menuid: DataTypes.INTEGER,
        decoration: DataTypes.STRING,
        sound: DataTypes.STRING,
        light: DataTypes.STRING,
        mc: DataTypes.STRING,
        contentdisplay: DataTypes.STRING,
        singer: DataTypes.STRING,
        entertainment: DataTypes.STRING
    }, {
        sequelize,
        modelName: "Bookingreservation",
        tableName: 'bookingreservation',
    });
    return Bookingreservation;
};
