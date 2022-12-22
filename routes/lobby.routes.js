const { authJwt } = require("../middleware");
const controller = require("../controllers/lobby.controller");
// const { check } = require('express-validator/check')
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

	//   app.get(
	//     "/api/test/admin",
	//     [authJwt.verifyToken],
	//     controller.adminBoard
	//   );

	//include
	// router.get(
	// 	"/", 
	// 	[authJwt.verifyToken], 
	// 	controller.getAllLobbies
	// );

	//not
	router.get(
		"/", 
		controller.getAllLobbies
	);

	app.use("/api/v1/lobbies", router);
};
