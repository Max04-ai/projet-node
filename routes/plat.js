const express = require('express');

const platController = require('../controlers/plat');

const router = express.Router();

//router.get('/', platController.getPlats);
router.get('/plats', platController.getPlats);
router.get('/plat/:id', platController.getPlatByid);

router.post('/plat', platController.createPlat);
//router.get("/", auth.hasRole("user"), controller.index);
//router.get("/:id", auth.hasRole("user"), controller.show);
//router.post("/", auth.hasRole("manager"), controller.create);
//router.put("/:id", auth.hasRole("manager"), controller.update);
//router.patch("/:id", auth.hasRole("manager"), controller.update);
//router.delete("/:id", auth.hasRole("manager"), controller.destroy)
//router.put('/employee/:id',employeeController.updatebyID);
//router.delete('/employee/:id', employeeController.deleteById); 

// delete user
//router.delete("/delete/:id", async (req, res) => {
//    try {
      // First find the user admin wants to delete
  //    const user = await User.findById(req.params.id) // getting id from the id you put in url
  
      // Make sure the user who wants to delete another user is an admin
  //    if (user.admin) {
  //       await user.deleteOne() // This deletes the user
  //    } else {
   //      res.status(403).json("Pas autorisé à effectuer cette action")
   //   }
 //   } catch (error) {
 //     res.sendStatus(500);
  //  }
//});

module.exports = router;