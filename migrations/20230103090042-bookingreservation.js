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
    return [
      // queryInterface.addColumn(
      //   'bookingreservation',
      //   'photobooth',
      //   Sequelize.STRING
      // ),
      queryInterface.addColumn(
        'bookingreservation',
        'teabreaktable',
        Sequelize.STRING
      ),
      // queryInterface.addColumn(
      //   'bookingreservation',
      //   'gallerytable',
      //   Sequelize.STRING
      // ),
    ] ;
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return [
      queryInterface.removeColumn(
        'bookingreservation',
        'photobooth',
        Sequelize.STRING
      ),
      queryInterface.removeColumn(
        'bookingreservation',
        'teabreaktable',
        Sequelize.STRING
      ),
      queryInterface.removeColumn(
        'bookingreservation',
        'gallerytable',
        Sequelize.STRING
      ),
    ] ;
  }
};
