const Menu = require("../models/menuJour");

exports.createMenu =  async (req, res, next) => {

  const menu = await Menu.create(req.body);

  console.log(menu);

  res.status(201).json({ success: true, data: menu });
}

// Get menu
exports.getMenu = (req, res) => {
    const menu = Menu.find().populate('plats')
    .then((menu) =>{   
        res.status(200).json({menu});
      }) 
      .catch(err => console.log(err) );
}

// Get menu by ID
exports.getMenubyID = async(req,res) => {
    try{
        const {id} = req.params;
        const menu = await Menu.findById(id);
        res.status(200).json(menu);
        }catch(error){
          res.status(500).json({message : error.message})
        }
}

// update menu by ID

exports.updatebyID = async(req ,res) =>{
   try{
    const {id} = req.params;
    const menu = await Menu.findByIdAndUpdate(id, req.body,  { new: true });
     if(!menu){
     return res.status(404).json({message : 'Ce menu est introuvable'})
}
   const updateMenu = await Menu.findById(id);
   res.status(200).json(updateMenu);
   console.log("Menu modifié avec succès");
}catch(error){
     res.status(500).json({message : error.message})
  }
}

// delete menu
exports.deleteById = async(req ,res) =>{
    try{
       const {id} = req.params;
       const menu = await Menu.findByIdAndDelete(id);
       if(!menu){
        return res.status(404).json({message : 'Menu non trouvé'})
    }
    //  const updatePost = await Post.findById(id);
      res.status(200).json(menu);
      console.log("Menu supprimé avec succès");
  }catch(error){
         res.status(500).json({message : error.message})
   }
} 
  