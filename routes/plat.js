const express = require('express');

const platController = require('../controlers/plat');

const router = express.Router();
//const {isAdmin} = require("../middleware/auth");
const {verifyUserToken} = require("../middleware/auth");

//router.get('/', platController.getPlats);
router.post('/plat',verifyUserToken, platController.createPlat);
router.get("/plat", verifyUserToken, platController.getPlats);
router.get("/plat/:id",verifyUserToken, platController.getPlatByid);

router.put("/plat/:id",verifyUserToken, platController.updatebyID);

router.delete("/plat/:id", verifyUserToken, platController.deleteById); 

module.exports = router;
