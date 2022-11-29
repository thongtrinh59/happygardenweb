
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('tempemployee_contract', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            contractid: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'contract',
                        schema: 'schema'
                    },
                    key: 'id'
                },
                allowNull: false
            },
            tempemployeeid: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'tempemployee',
                        schema: 'schema'
                    },
                    key: 'id'
                },
                allowNull: false
            },
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('tempemployee_contract');
    }
}






// // 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//      * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
//      */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//      * await queryInterface.dropTable('users');
//      */
//   }
// };
