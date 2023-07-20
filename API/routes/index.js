const express = require("express");
const userRoute = require("./user.route");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/users",
    route: userRoute,
  },
];
defaultRoutes.forEach((elm) => {
  router.use(elm.path, elm.route);
});
module.exports = router;
