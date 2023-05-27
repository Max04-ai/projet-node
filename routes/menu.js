const express = require('express');

const menuController = require('../controlers/menu');

const router = express.Router();

router.get('/menu', isAuthenticated, menuController.getMenus);
router.get('/menu/:id',isAuthenticated, menuController.getMenubyID);

router.post('/menu', isAuthenticated, menuController.createMenu);
router.put('/menu/:id', isAuthenticated, menuController.updatebyID);
router.delete('/menu/:id', isAuthenticated, menuController.deleteById); 

module.exports = router;
