const express = require("express");
const { registerUser,currentUser, loginUser} = require("../controlers/authController");
const validateToken = require("../middleware/validateTokenHandler");
//const {isAuthenticated} = require("../middleware/auth");

const router = express.Router();

router.post("/api/v1/users/register", registerUser)
//router.post("/register", registerUser);

router.post("/api/v1/users/login", loginUser);

router.get("/api/v1/users/me", validateToken, currentUser);
 
module.exports = router;

//router.get('/logout', logout);
//router.put('/updateDetails', protect, updateDetails);
//router.put('/updatePassword', protect, updatePassword);
//router.post('/reset', forgotPassword);
//router.put('/reset/:resetToken', resetPassword);


//router.get("/current", validateToken, currentUser); 



//router.post('/authenticate', authenticate);     // public route

//router.get('/users', authorize([Roles.ADMIN]), getAll); // admin only can see all users

