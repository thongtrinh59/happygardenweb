'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // return queryInterface.addColumn(
    //   'status',
    //   'empty1', 'empty2',
    //  Sequelize.STRING
    // );
    // await queryInterface.addColumn('status', 
    // { 
    //   empty1: {
    //     type: Sequelize.STRING
    //   },
      
    //   empty2: {
    //     type: Sequelize.STRING
    //   },
    // });

    return [ queryInterface.addColumn(
      'status',
      'empty1',
       Sequelize.STRING
     ),
    queryInterface.addColumn(
     'status',
     'empty2',
     Sequelize.STRING
  )];
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return [ queryInterface.removeColumn(
      'status',
      'empty1'
    ),
      queryInterface.removeColumn(
        'status',
        'empty2'
      ),
    ];
  }
};
