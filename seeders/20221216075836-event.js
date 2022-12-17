'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      "event", [
        {
          type: "tiệc cưới",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "tiệc cá nhân",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "tiệc công ty",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
