// module.exports = {
//     up: async(queryInterface, Sequelize) => {
//         await queryInterface.createTable("users", {
//             id: {
//                 allowNull: false,
//                 autoIncrement: true,
//                 primaryKey: true,
//                 type: Sequelize.INTEGER,
//             },
//             username: {
//                 type: Sequelize.STRING,
//             },
//             name: {
//                 type: Sequelize.STRING,
//             },
//             email: {
//                 type: Sequelize.STRING,
//             },
//             password: {
//                 type: Sequelize.STRING,
//             },
//             hide: {
//                 type: Sequelize.BOOLEAN,
//                 defaultValue: false,
//             },
//             branchId: {
//                 type: Sequelize.INTEGER,
//                 references: {
//                     model: {
//                         tableName: 'branches',
//                         schema: 'schema'
//                     },
//                     key: 'id'
//                 },
//                 allowNull: false
//             },
//             createdAt: {
//                 allowNull: false,
//                 type: Sequelize.DATE,
//             },
//             updatedAt: {
//                 allowNull: false,
//                 type: Sequelize.DATE,
//             },
//         });
//     },
//     down: async(queryInterface, Sequelize) => {
//         await queryInterface.dropTable("users");
//     },
// };