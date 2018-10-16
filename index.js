const express = require("express");
const UserRouter = require("./users/routes.config");
var app = express();
app.use(express.json());
UserRouter.routeConfig(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}.....`);
});
