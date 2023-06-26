const express = require('express');

const {getMenu,getMenubyID,createMenu,deleteById, updatebyID} = require('../controlers/menu_jour');
const {verifyUserToken} = require("../middleware/auth");

const router = express.Router();

router.get("/menus", verifyUserToken, getMenu);
router.get("/menu/jour/:id",verifyUserToken,  getMenubyID);

router.post("/menu/jour", verifyUserToken,createMenu);
router.put('/menu/jour/:id',verifyUserToken, updatebyID );
router.delete("/menu/jour/:id",verifyUserToken,  deleteById); 

module.exports = router;







