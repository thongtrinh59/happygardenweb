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
	router.post("/", controller.createCustomer);


	// router.post("/", controller.create);

	// router.put("/user", controller.hide);

	router.put("/customer/:id", controller.updateCustomer);

	router.get("/customer/:id", controller.getCustomerByID);

	// router.get("/filters", controller.findWithFilters);

	router.get("/", controller.getAllCustomers);

	router.delete("/customer/:id", controller.deleteCustomer)

	app.use("/api/v1/customers", router);
};
