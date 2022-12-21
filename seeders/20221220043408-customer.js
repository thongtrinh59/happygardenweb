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
      "customers", [{
        customername: "tjhong",
        phonenumber: 11111,
        nationalid: "wqeqeq",
        address: "1 duong 2",
        email: "1@gmail.com",
        companyname: "nlt",
        taxnumber: "12345",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customername: "thanh2",
        phonenumber: 22222,
        nationalid: "adzew",
        address: "1 duong 3",
        email: "2@gmail.com",
        companyname: "nlt1",
        taxnumber: "123423",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customername: "thanh3",
        phonenumber: 33333,
        nationalid: "jucq",
        address: "1 duong 3",
        email: "3@gmail.com",
        companyname: "nlt3",
        taxnumber: "123453",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customername: "thanh4",
        phonenumber: 44444,
        nationalid: "haqx",
        address: "1 duong 4",
        email: "4@gmail.com",
        companyname: "nlt4",
        taxnumber: "123454",
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
    await queryInterface.bulkDelete("customers", null, {});
  }
};
