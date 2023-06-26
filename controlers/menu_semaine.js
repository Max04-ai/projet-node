const MenuSemaine = require("../models/menuSemaine");

exports.createMenuSemaine =  async (req, res, next) => {

  const menu_semaine = await MenuSemaine.create(req.body);

  console.log(menu_semaine);

  res.status(201).json({ success: true, data: menu_semaine });
}

// Get menu
exports.getMenuSemaine = (req, res) => {
    const menu = MenuSemaine.find()
    .then((menu) =>{   
        res.status(200).json({menu});
      }) 
      .catch(err => console.log(err) );
}

// Get menu by ID
exports.getMenuSemainebyID = async(req,res) => {
    try{
        const {id} = req.params;
        const menu = await MenuSemaine.findById(id);
        res.status(200).json(menu);
        }catch(error){
          res.status(500).json({message : error.message})
        }
}

// update menu by ID

exports.updateMenuSemainebyID = async(req ,res) =>{
   try{
    const {id} = req.params;
    const menu = await MenuSemaine.findByIdAndUpdate(id, req.body);
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
exports.deleteMenuSemaineById = async(req ,res) =>{
    try{
       const {id} = req.params;
       const menu_sem = await MenuSemaine.findByIdAndDelete(id);
       if(!menu_sem){
        return res.status(404).json({message : 'Menu non trouvé'})
    }
    //  const updatePost = await Post.findById(id);
      res.status(200).json(menu_sem);
      console.log("Menu supprimé avec succès");
  }catch(error){
         res.status(500).json({message : error.message})
   }
} 
  