const express = require("express");
const { createClient,getClients, getClientbyId, updatebyID} = require("../controlers/client");
//const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/client", isAuthenticated, createClient);

router.post("/clients",isAuthenticated, getClients);

router.get("/client/:id",isAuthenticated, getClientbyId);
router.put("/client/:id",isAuthenticated, updatebyID);
//router.delete("/client/:id", )
router.post('/client', isAuthenticated, clientController.createClient);
router.delete('/client/:id',isAuthenticated, clientController.deleteById); 

module.exports = router;