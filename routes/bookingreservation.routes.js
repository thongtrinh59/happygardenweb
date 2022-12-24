
const { authJwt } = require("../middleware");
const controller = require("../controllers/bookingreservation.controller");


module.exports = function (app) {
	var router = require("express").Router();
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	//include
	// router.post(
	// 	"/", 
    //     // [authJwt.verifyToken],
	// 	// controller.validate('createCustomer'),
    //     controller.createBookingreservation
	// );

	// router.put(
	// 	"/bookingreservation/:id", 
	// 	// controller.validate('updateCustomer'),
    //     // [authJwt.verifyToken],
	// 	controller.updateBookingreservation
	// );

	// router.get(
    //     "/bookingreservations/:id", 
    //     // [authJwt.verifyToken], 
    //     controller.getBookingByID
    // );

	// router.get(
    //     "/", 
    //     // [authJwt.verifyToken], 
    //     controller.getAllBooking
    // );

	// // router.delete(
    // //     "/bookingreservation/:id", 
    // //     [authJwt.verifyToken],
    // //     controller.deleteContract
    // // );

    // router.get(
    //     "/bookingreservation", 
    //     // [authJwt.verifyToken], 
    //     controller.getBookingByDate
    // );


	//not
	router.post(
		"/", 
        // [authJwt.verifyToken],
		// controller.validate('createCustomer'),
        controller.createBookingreservation
	);

	router.put(
		"/bookingreservation/:id", 
		// controller.validate('updateCustomer'),
        // [authJwt.verifyToken],
		controller.updateBookingreservation
	);

	router.get(
        "/bookingreservation/:id", 
        // [authJwt.verifyToken], 
        controller.getBookingByID
    );

	router.get(
        "/", 
        // [authJwt.verifyToken], 
        controller.getAllBooking
    );

	// router.delete(
    //     "/bookingreservation/:id", 
    //     [authJwt.verifyToken],
    //     controller.deleteContract
    // );

    router.get(
        "/bookingreservation", 
        // [authJwt.verifyToken], 
        controller.getBookingByDate
    );

	router.put(
        "/bookingreservation/:id/action/cancel", 
        // [authJwt.verifyToken], 
        controller.cancelBooking
    );

	app.use("/api/v1/bookingreservations", router);
};
