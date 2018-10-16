const UserController = require("./controllers/users.controller");
exports.routeConfig = app => {
  app.post("/users", [UserController.insert]);

  app.get("/users/:userId", [UserController.getById]);

  app.patch("/users/:userId", [UserController.patchById]);

  app.delete("/users/:userId", [UserController.removeById]);
};
