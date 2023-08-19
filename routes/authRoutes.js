const express = require("express");
const router = express.Router();

//const router = require('express').Router(); --This is same thing as above two line of codes

const { logoutController, loginController, registerController } = require("../controllers/authControllers");


//routes
// REGISTER
router.post("/register", registerController);
//LOGIN
router.post("/login", loginController);

//LOGOUT/
router.post("/logout", logoutController);

module.exports = router;