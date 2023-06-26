const express = require('express');

const detailController = require('../controlers/detailCommande');
const {verifyUserToken} = require("../middleware/auth"); 

const router = express.Router();
//const {isAuthenticated} = require("../middleware/auth");
//const validateToken = require("../middleware/validateTokenHandler");

router.post("/detail/commande",verifyUserToken, detailController.createdetailCommande);

router.get("/detail/commande", verifyUserToken, detailController.getdetailCommande);
router.get("/detail/commande/:id", verifyUserToken, detailController.getdetailCommandebyId);

router.put("/detail/commande/:id",verifyUserToken,  detailController.updateDetailCommandebyID);

router.delete("/detail/commande/:id",verifyUserToken, detailController.deleteDetailcmdeById); 

module.exports = router;
