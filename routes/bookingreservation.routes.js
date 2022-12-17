const { authJwt } = require("../middleware");
const controller = require("../controllers/contract.controller");
// const { check } = require('express-validator/check')
const { body, validationResult } = require('express-validator');


// exports.validate = (method) => {
//     switch (method) {
//         case 'createCustomer': {
//             return [
//                 check('customername', `customername doesn't exists`).exists(),
//                 check('email', 'Invalid email').isEmail(),
//                 // check('phone').exists(),
//                 // check('address').optional(),
//                 // check('companyname').optional(),
//                 // body('phone').optional().isInt(),
//                 // body('status').optional().isIn(['enabled', 'disabled'])
//             ]
//         }
//     }
// }

module.exports = function (app) {
	var router = require("express").Router();
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	//   app.get("/api/test/all", controller.allAccess);

	//   app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

	//   app.get(
	//     "/api/test/mod",
	//     [authJwt.verifyToken],
	//     controller.moderatorBoard
	//   );

	//   app.get(
	//     "/api/test/admin",
	//     [authJwt.verifyToken],
	//     controller.adminBoard
	//   );

	//   app.get(
	//     "/api/test/emp",
	//     [authJwt.verifyToken],
	//     controller.employeeBoard
	//   );

	

	router.post(
		"/", 
        [authJwt.verifyToken],
		// body('email').isEmail(),
		// controller.validate('createCustomer'),
		controller.createBookingreservation
	);

	router.put(
		"/bookingreservation/:id", 
		// controller.validate('updateCustomer'),
        [authJwt.verifyToken],
		controller.updateBookingreservation
	);

	router.get(
        "/bookingreservations/:id", 
        [authJwt.verifyToken], 
        controller.getContractByID
    );

	router.get(
        "/", 
        [authJwt.verifyToken], 
        controller.getAllContract
    );

	// router.delete(
    //     "/bookingreservation/:id", 
    //     [authJwt.verifyToken],
    //     controller.deleteContract
    // );

    router.get(
        "/", 
        [authJwt.verifyToken], 
        controller.getBookingByDate
    );



	app.use("/api/v1/bookingreservations", router);
};
