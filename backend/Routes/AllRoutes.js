const express = require("express");
const { createUser, loginUser, getProfile } = require("../Controllers/Usercontroller");

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);

module.exports = router;
