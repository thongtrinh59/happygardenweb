const { authJwt } = require("../middleware");
const controller = require("../controllers/customer.controller");


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
	// 	[authJwt.verifyToken], 
	// 	controller.validate('createCustomer'),
	// 	controller.createCustomer
	// );

	// router.put(
	// 	"/customer/:id",
	// 	[authJwt.verifyToken], 
	// 	controller.validate('updateCustomer'),
	// 	controller.updateCustomer
	// );

	// router.get(
	// 	"/customer/:id",
	// 	[authJwt.verifyToken],
	// 	controller.getCustomerByID
	// );

	// router.get(
	// 	"/", 
	// 	[authJwt.verifyToken],
	//  	controller.getAllCustomers
	// );

	// router.delete(
	// 	"/customer/:id", 
	// 	[authJwt.verifyToken],
	// 	controller.deleteCustomer
	// );

	//not
	router.post(
		"/", 
		controller.validate('createCustomer'),
		controller.createCustomer
	);

	router.put(
		"/customer/:id",
		controller.validate('updateCustomer'),
		controller.updateCustomer
	);

	router.get(
		"/customer/:id",
		controller.getCustomerByID
	);

	router.get(
		"/", 
	 	controller.getAllCustomers
	);

	router.delete(
		"/customer/:id", 
		controller.deleteCustomer
	);

	app.use("/api/v1/customers", router);
};
