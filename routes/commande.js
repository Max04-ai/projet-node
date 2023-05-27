const express = require("express");
const { createCommande,getCommande, getCommandebyId, updatebyID} = require("../controlers/commande");
//const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/create", isAuthenticated, createCommande);

router.post("/commandes",isAuthenticated,  getCommande);

router.get("/commande/:id",isAuthenticated, getCommandebyId);
router.put("/commande/:id",isAuthenticated, updatebyID);

module.exports = router;