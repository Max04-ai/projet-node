// create menu
exports.createMenu = (req,res)=> {
    const menu = new Menu(req.body);  
    
    menu.save().then(result => {
     
      return res.status(200).json({
       menu : result 
      })
    })
}

// Get menu
exports.getMenu = (req, res) => {
    const menu = Menu.find()
    .then((menu) =>{
        res.status(200).json({menu});
      })   
    menu.save().then(result => {
     
      return res.status(200).json({
       menu : result 
      })
    })
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
    const menu = await Menu.findByIdAndUpdate(id, req.body);
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
       const post = await Post.findByIdAndDelete(id);
       if(!post){
        return res.status(404).json({message : 'Menu non trouvé'})
    }
    //  const updatePost = await Post.findById(id);
      res.status(200).json(post);
      console.log("Menu supprimé avec succès");
  }catch(error){
         res.status(500).json({message : error.message})
   }
} 
  