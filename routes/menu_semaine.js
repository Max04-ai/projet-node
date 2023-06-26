const express = require('express');

const menuSemaineController = require("../controlers/menu_semaine");
const {verifyUserToken} = require("../middleware/auth");
//const {verifierAdmin} = require("../middleware/auth");

const router = express.Router();

router.get("/menu/semaine", verifyUserToken,menuSemaineController.getMenuSemaine);
router.get("/menu/semaine/:id",verifyUserToken, menuSemaineController.getMenuSemainebyID);

router.post("/menu/semaine", verifyUserToken, menuSemaineController.createMenuSemaine);
router.put("/menu/semaine/:id", verifyUserToken, menuSemaineController.updateMenuSemainebyID);
router.delete("/menu/semaine/:id",verifyUserToken,  menuSemaineController.deleteMenuSemaineById); 


module.exports = router;