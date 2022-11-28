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
            Bookingreservation.hasMany(
                
            );
        }
    }
    Bookingreservation.init({
        bookingid: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userid: {
            type: DataTypes.STRING,
            foreign
        }
        customername: DataTypes.STRING,
        phonenumber: DataTypes.INTEGER,
        address: DataTypes.STRING,
        email: DataTypes.STRING,
        nationalid: DataTypes.STRING,
        companyname: DataTypes.STRING
    }, {
        sequelize,
        modelName: "Bookingreservation",
        tableName: 'bookingreservations',
    });
    return Bookingreservation;
};
