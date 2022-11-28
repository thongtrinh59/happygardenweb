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
            Bookingreservation.hasOne(models.User, {
                foreignKey: "userid"
            });

            Bookingreservation.hasOne(models.Customer, {
                foreignKey: "customerid"
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
        numberoftalbes: DataTypes.INTEGER,
        numberofguests: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: "Bookingreservation",
        tableName: 'bookingreservations',
    });
    return Bookingreservation;
};
