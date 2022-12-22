const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  var router = require("express").Router();
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // app.get(
  //   "/api/test/mod",
  //   [authJwt.verifyToken],
  //   controller.moderatorBoard
  // );

  //include jwt
  // router.put(
  //   "/user/:id", 
  //   [authJwt.verifyToken],
  //   controller.update
  // );

  // router.get(
  //   "/user/:id",
  //   [authJwt.verifyToken],
  //   controller.findOne
  // );

  // router.get(
  //   "/filters", 
  //   [authJwt.verifyToken], 
  //   controller.findWithFilters
  // );

  // router.get(
  //   "/",
  //   [authJwt.verifyToken], 
  //   controller.findAll
  // );

  //not include jwt
  router.put(
    "/user/:id", 
    controller.update
  );

  router.get(
    "/user/:id",
    controller.findOne
  );

  router.get(
    "/filters", 
    controller.findWithFilters
  );

  router.get(
    "/",
    controller.findAll
  );

  app.use("/api/v1/users", router);
};
