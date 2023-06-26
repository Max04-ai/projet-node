const express = require("express");
const {registerUser, loginUser, getAllUsers} = require("../controlers/authController");
const router = express.Router();
//const validateToken = require("../middleware/validateTokenHandler");
const {verifyUserToken, isAdmin } = require("../middleware/auth");

//const UserController = require('../controlers/authController');

//router.get('/users', UserController.getAllUsers);
router.get("/all", verifyUserToken,isAdmin, getAllUsers);

router.post("/register", registerUser)

//const { sendWelcomeEmail } = require("../controllers/emailController");

//router.post("/inscription", sendWelcomeEmail);


router.post("/login", loginUser);

module.exports = router;



