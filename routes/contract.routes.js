const { authJwt } = require("../middleware");
const controller = require("../controllers/contract.controller");


module.exports = function (app) {
	var router = require("express").Router();
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	//   app.get(
	//     "/api/test/mod",
	//     [authJwt.verifyToken],
	//     controller.moderatorBoard
	//   );


	router.post(
		"/", 
        // [authJwt.verifyToken],
		// body('email').isEmail(),
		// controller.validate('createCustomer'),
		controller.createContract
	);

	// router.put(
	// 	"/contract/:id", 
	// 	// controller.validate('updateCustomer'),
    //     [authJwt.verifyToken],
	// 	controller.updateContract
	// );

	router.get(
        "/contract/:id", 
        // [authJwt.verifyToken], 
        controller.getContractByID
    );

	router.get(
        "/", 
        // [authJwt.verifyToken], 
        controller.getAllContract
    );

	// router.delete(
    //     "/contract/:id", 
    //     [authJwt.verifyToken],
    //     controller.deleteContract
    // );

	app.use("/api/v1/contracts", router);
};
