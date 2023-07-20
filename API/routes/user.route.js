const express = require("express");
const { createUser, getUser, getId } = require("../controller/user.controller");

const router = express.Router();
router.route("/").post(createUser);
router.route("/").get(getUser);
router.route("/:id").get(getId);
module.exports = router;
