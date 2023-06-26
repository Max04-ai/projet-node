const Commande = require("../models/commande");

// Récupérer toutes les commandes
exports.getAllCommandes = async (req, res) => {
    try {
      // Récupérer toutes les commandes de la base de données
      const commandes = await Commande.find().populate('clients', 'nom email');
  
      res.status(200).json(commandes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des commandes' });
    }
  };

// Create commande
exports.createCommande = async (req, res) => {
   const commande = await Commande.create(req.body);
    
    res.status(201).json({ success: true, data: commande });
};
  
//exports.createCommande = (req,res) => {
//    const commande = new Commande(req.body);
//    return res.json(commande)
//}
 //    console.log("Commande created", commande);

 //  commande.save().then(result => 
 //  res.status(200).json({
 //     commande: result
 // });
// });

// Get commande by ID
exports.getCommandebyId = async (req, res) => {
    try {
        const commande = await Commande.findById(req.params.id);
        res.status(200).json(commande);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

// Update commande

exports.updatebyID = async(req ,res) =>{
  try{
    const {id} = req.params;
    const commande = await Commande.findByIdAndUpdate(id, req.body,  { new: true });
     if(!commande){
     return res.status(404).json({message : 'Commande introuvable'})
  }
  const updateCommande = await Commande.findById(id);
  res.status(200).json(updateCommande);
  console.log("Commande modifié avec succès");
}catch(error){
      res.status(500).json({message : error.message})
   }
}


// delete menu
exports.deleteById = async(req ,res) =>{
    try{
       const {id} = req.params;
       const commande = await Commande.findByIdAndDelete(id);
       if(!commande){
        return res.status(404).json({message : 'Commande non trouvé'})
    }
    //  const updatePost = await Post.findById(id);
      res.status(200).json(commande);
      console.log("Commande supprimé avec succès");
  }catch(error){
         res.status(500).json({message : error.message})
   }
} 
  





