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
    await queryInterface.createTable('bookingreservation', { 
      bookingid: {
        "type": Sequelize.INTEGER,
        "autoIncrement": true,
        "primaryKey": true,
        "allowNull": false
      },
      userid: {
        "type": Sequelize.INTEGER,
        "allowNull": false
      },
      customerid: {
        "type": Sequelize.INTEGER,
        "allowNull": false
      },
      lobbyid: {
        "type": Sequelize.INTEGER,
        "allowNull": false
      },
      statusid: {
        "type": Sequelize.INTEGER,
        "allowNull": false,
        "defaultValue": 1
      },
      eventid: {
        "type": Sequelize.INTEGER,
        "allowNull": false
      },
      numberoftables: {
        "type": Sequelize.INTEGER,
        "allowNull": false
      },
      numberofguests: {
        "type": Sequelize.INTEGER,
        "allowNull": false
      },
      set: {
        "type": Sequelize.INTEGER,
        "allowNull": false
      },
      description: {
        "type": Sequelize.STRING,
        "allowNull": true
      },
      fromdate: {
        "type": Sequelize.DATE,
        "allowNull": false
      },
      todate: {
        "type": Sequelize.DATE,
        "allowNull": false
      },
      menuid: {
        "type": Sequelize.INTEGER,
        "allowNull": false
      },
      decoration: {
        "type": Sequelize.STRING,
        "allowNull": true
      },
      sound: {
        "type": Sequelize.STRING,
        "allowNull": true
      },
      light: {
        "type": Sequelize.STRING,
        "allowNull": true
      },
      mc: {
        "type": Sequelize.STRING,
        "allowNull": true
      },
      contentdisplay: {
        "type": Sequelize.STRING,
        "allowNull": true
      },
      singer: {
        "type": Sequelize.STRING,
        "allowNull": true
      },
      entertainment: {
        "type": Sequelize.STRING,
        "allowNull": true
      },
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('bookingreservation');
  }
};
