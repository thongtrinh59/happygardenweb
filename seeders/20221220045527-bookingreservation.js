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
      "bookingreservation", [{
        userid: 1,
        customerid: 1,
        lobbyid: 1,
        statusid: 1,
        eventid: 1,
        numberoftalbes: 1,
        numberofguests: 3,
        description: "new",
        fromdate: "2022-01-17T03:23:35.266Z",
	      todate: "2022-02-17T07:23:35.266Z",
        menu: "1",
        decoration: "san khau",
        sound: "có",
        light: "có",
        mc: "có",
        contentdisplay: "welcome to ...",
        singer: "có",
        entertainment: "diễn xiếc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userid: 1,
        customerid: 1,
        lobbyid: 1,
        statusid: 1,
        eventid: 1,
        numberoftalbes: 1,
        numberofguests: 3,
        description: "new",
        fromdate: "2022-02-17T03:23:35.266Z",
	      todate: "2022-03-17T07:23:35.266Z",
        menu: "1",
        decoration: "san khau",
        sound: "có",
        light: "có",
        mc: "có",
        contentdisplay: "welcome to ...",
        singer: "có",
        entertainment: "diễn xiếc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userid: 1,
        customerid: 1,
        lobbyid: 1,
        statusid: 1,
        eventid: 1,
        numberoftalbes: 1,
        numberofguests: 3,
        description: "new",
        fromdate: "2022-03-17T03:23:35.266Z",
	      todate: "2022-04-17T07:23:35.266Z",
        menu: "1",
        decoration: "san khau",
        sound: "có",
        light: "có",
        mc: "có",
        contentdisplay: "welcome to ...",
        singer: "có",
        entertainment: "diễn xiếc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userid: 1,
        customerid: 1,
        lobbyid: 1,
        statusid: 1,
        eventid: 1,
        numberoftalbes: 1,
        numberofguests: 3,
        description: "new",
        fromdate: "2022-04-17T03:23:35.266Z",
	      todate: "2022-05-17T07:23:35.266Z",
        menu: "1",
        decoration: "san khau",
        sound: "có",
        light: "có",
        mc: "có",
        contentdisplay: "welcome to ...",
        singer: "có",
        entertainment: "diễn xiếc",
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
