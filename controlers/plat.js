const Plat = require("../models/plat");


exports.createPlat = async (req, res) => {
  const plat = await Plat.create(req.body);
  
  res.status(201).json({ success: true, data: plat });
}
exports.getPlats = (req , res)  => {
  const plat = Plat.find()
  .then((plat) => {
    res.status(200).json({plat});
  })     
.catch(err => console.log(err) );
};

// Get plat by ID

/**
 * @desc    Get Food by ID
 * @route   GET /api/v1/plats/:id
 * @access  Private/Client
 */

exports.getPlatByid = async(req ,res) =>{
  try{
   const {id} = req.params;
   const plat = await Plat.findById(id);
   res.status(200).json(plat);
}catch(error){
      res.status(500).json({message : error.message})
 }
}
// delete plat

/**
 * @desc    Delete Food by ID
 * @route   GET /api/v1/plats/:id
 * @access  Private/Admin
 */

exports.deleteById = async(req ,res) =>{
  try{
     const {id} = req.params;
     const plat = await Plat.findByIdAndDelete(id);
     if(!plat){
      return res.status(404).json({message : 'Plat non trouvé'})
  }
  //  const updatePost = await Post.findById(id);
    res.status(200).json(plat);
    console.log("Plat supprimé avec succès");
}catch(error){
       res.status(500).json({message : error.message})
 }
} 

exports.updatebyID = async(req ,res) =>{
  try{
    const {id} = req.params;
    const plat = await Plat.findByIdAndUpdate(id, req.body, { new: true });
     if(!plat){
     return res.status(404).json({message : 'Plat introuvable'})
  }
  const updatePlat = await Plat.findById(id);
  res.status(200).json(updatePlat);
  console.log("Plat modifié avec succès");
}catch(error){
      res.status(500).json({message : error.message})
   }
}

   // if(err){
  //  return res.status(400).json({
  //    error : err
  //  });

  // .catch(err => console.log(err) );
 
//.select("_id title body")

// Get employee by ID 

//exports.getEmployeeByid = async(req ,res) =>{
//  try{
//     const {id} = req.params;
//     const employee = await Employee.findById(id);
//    res.status(200).json(employee);
//}catch(error){
//       res.status(500).json({message : error.message})
// }
//}

// update employee by ID
//exports.updatebyID = async(req ,res) =>{
//  try{
//     const {id} = req.params;
//     const employee = await Employee.findByIdAndUpdate(id, req.body);
 //    if(!employee){
  //    return res.status(404).json({message : 'Ne peut pas trouver un employé'})
  //}
    //const updateEmployee = await Employee.findById(id);
    //res.status(200).json(updateEmployee);
    //console.log("Employé modifié avec succès");
//}catch(error){
//       res.status(500).json({message : error.message})
// }
//}

//const Post = require('../models/post')

  //  res.json({
  //      posts: [{title: "First Post"},
   //      {title : "Second Post"} 
 //   ]   
 //   });

//  res.send("Hello Node JS");
//};


 //  post.save().then(result => {
 //   res.json({
 //       post : result
 //   });
   // console.log(result)
//});


//module.exports = {
  
//  findPostById,
//};

//}       
//  return res.status(400).json({
//    error:err

//  })

//  res.status(200).json({
//      post : result
//  });
