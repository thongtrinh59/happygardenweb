const { authJwt } = require("../middleware");
const controller = require("../controllers/status.controller");



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

	router.get("/", controller.getAllStatus);

	app.use("/api/v1/statuses", router);
};
