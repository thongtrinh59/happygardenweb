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
      "menu", [
        {
          menuname: "đồng",
          price: "3990000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          menuname: "bạc",
          price: "4450000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          menuname: "vàng",
          price: "5010000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          menuname: "kim cương",
          price: "5500000",
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
    await queryInterface.bulkDelete("menu", null, {});
  }
};
