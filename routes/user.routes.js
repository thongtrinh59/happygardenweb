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

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken],
    controller.adminBoard
  );

  app.get(
    "/api/test/emp",
    [authJwt.verifyToken],
    controller.employeeBoard
  );

  router.post("/", controller.create);

  router.put("/user", controller.hide);

  router.put("/user/:id", controller.update);

  router.get("/user/:id", controller.findOne);

  router.get("/filters", controller.findWithFilters);

  router.get("/", controller.findAll);

  app.use("/api/v1/users", router);
};
