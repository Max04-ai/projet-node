const express = require("express");
const { createCommande,getAllCommandes, getCommandebyId, updatebyID, deleteById} = require("../controlers/commande");
const {verifyUserToken, isAdmin}  = require("../middleware/auth");
const cmdctrl = require("../controlers/commande");

//const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/commande",verifyUserToken, createCommande);


router.get("/commandes",verifyUserToken, getAllCommandes);

router.get("/commande/:id", verifyUserToken,verifyUserToken, getCommandebyId);
router.put("/commande/:id", verifyUserToken, updatebyID);
router.delete("/commande/:id",verifyUserToken,  deleteById);

module.exports = router;