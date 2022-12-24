// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize) => {
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
      "users", [{
        username: "thomas",
        phonenumber: "12345",
        email: "th@gmail.com",
        password: "12454",
        title: "admin",
        nationalid: "w234131",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "sds",
        phonenumber: "232432",
        email: "tadfah@gmail.com",
        password: "1243as54",
        title: "staff",
        nationalid: "haers",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "gaefs",
        phonenumber: "177845",
        email: "thghr@gmail.com",
        password: "1245a1ad4",
        title: "staff",
        nationalid: "vzczc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "jui",
        phonenumber: "11235",
        email: "thui@gmail.com",
        password: "1241254",
        title: "staff",
        nationalid: "dfa312",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {}
    );
  },

  down: async(queryInterface, Sequelize) =>  {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("users", null, {});
  }
};
