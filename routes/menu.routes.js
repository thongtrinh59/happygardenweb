const { authJwt } = require("../middleware");
const controller = require("../controllers/menu.controller");
const { body, validationResult } = require('express-validator');



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
	// router.get(
	// 	"/", 
	// 	[authJwt.verifyToken], 
	// 	controller.getAllMenus
	// );

	//not
	router.get(
		"/", 
		controller.getAllMenus
	);

	app.use("/api/v1/menus", router);
};
