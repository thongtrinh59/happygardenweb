const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // User.belongsToMany(models.Role, {
            //     through: "user_roles",
            //     foreignKey: "userId",
            //     otherKey: "roleId",
            // });
            User.hasMany(models.Bookingreservation, {
                foreignKey: "userid",
            })
        }
    }

    User.init({
        userid: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        username: DataTypes.STRING,
        phonenumber: DataTypes.INTEGER,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        title: DataTypes.STRING,
        nationalid: DataTypes.STRING
    }, {
        sequelize,
        modelName: "User",
        tableName: 'users',
    });
    return User;
    // User.init({
    //     id: {
    //         allowNull: false,
    //         autoIncrement: true,
    //         primaryKey: true,
    //         type: DataTypes.INTEGER
    //     },
    //     username: DataTypes.STRING,
    //     name: DataTypes.STRING,
    //     email: DataTypes.STRING,
    //     password: DataTypes.STRING,
    //     hide: DataTypes.BOOLEAN,
    // }, {
    //     sequelize,
    //     modelName: "User",
    //     tableName: 'users',
    // });
    // return User;
};