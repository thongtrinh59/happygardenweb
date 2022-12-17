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
      "lobby", [
        {
          lobbyname: "ngoài trời 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lobbyname: "ngoài trời 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lobbyname: "trong nhà 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lobbyname: "trong nhà 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lobbyname: "trong nhà 3",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
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
    await queryInterface.bulkDelete("lobby", null, {});
  }
};
