const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Customer extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Customer.hasMany(models.Bookingreservation, {
                foreignKey: "customerid",
            });

            // Customer.hasMany(models.Contract, {
            //     foreignKey: "customerid",
            // });
        }
    }
    Customer.init({
        customerid: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        customername: DataTypes.STRING,
        phonenumber: DataTypes.STRING,
        address: DataTypes.STRING,
        email: DataTypes.STRING,
        nationalid: DataTypes.STRING,
        companyname: DataTypes.STRING,
        taxnumber: DataTypes.STRING
    }, {
        sequelize,
        modelName: "Customer",
        tableName: 'customers',
    });
    return Customer;
};





// // 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Customer extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Customer.init({
//     customername: DataTypes.STRING,
//     phonenumber: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Customer',
//   });
//   return Customer;
// };