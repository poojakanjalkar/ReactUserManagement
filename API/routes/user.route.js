const express = require("express");
const {
  createUser,
  getUser,
  getId,
  deleteUserById,
  login1,
} = require("../controller/user.controller");

const router = express.Router();
router.route("/").post(createUser);
router.route("/").get(getUser);
router.route("/:id").get(getId);
router.route("/").delete(deleteUserById);
router.route("/login").post(login1);
module.exports = router;
