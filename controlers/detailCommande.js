const detailCommande = require("../models/detailCommande");
const Plat = require("../models/plat");

//  Get commande
exports.getdetailCommande = (req,res) => {
    
    const detailcmde = detailCommande.find()
    .then((detailcmde) => {
        res.status(200).json
   })
  .catch(err => console.log("Erreur"));
}

// Create commande
exports.createdetailCommande = async (req, res) => {  
  const { platId, quantite } = req.body;

  try {
    // Vérifier si le plat existe
    const plat = await Plat.findById(platId);
    if (!plat) {
      return res.status(404).json({ message: 'Plat non trouvé' });
    }
    
    console.log(plat.prix);
    // Calculer le prix total en fonction de la quantité
    const prixTotal = plat.prix * quantite;

    // Créer un nouvel enregistrement de détail de commande
    const detailCommandes = new detailCommande({
      plats: platId,
      quantite: quantite,
      prixTotal: prixTotal
    });

  await detailCommandes.save();
 // const { id } = req.params;
 

  // const {quantite,prix_unitaire} = req.body;
  
   
      // Récupérer le plat à partir de l'ID
     // console.log(platId);
   //  const plat = await Plat.findById(id);
  
      res.status(201).json({ message: "Détail de commande enregistré avec succès" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Une erreur est survenue lors de l'enregistrement du détail de commande" });
    }
};
 

// Get commande by ID
exports.getdetailCommandebyId = async (req, res) => {
    try {
        const detailcmde = await detailCommande.findById(req.params.id);
        res.status(200).json(detailcmde);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

// Update commande

exports.updateDetailCommandebyID = async(req ,res) =>{
  try{
    const {id} = req.params;
    const detailcmde = await detailCommande.findByIdAndUpdate(id, req.body,  { new: true });
     if(!detailcmde){
     return res.status(404).json({message : ' Détail Commande introuvable'})
  }
 // const updatedetailcmde = await detailCommande.findById(id);
  res.status(200).json(detailcmde);
  console.log("Détail Commande modifié avec succès");
}catch(error){
      res.status(500).json({message : error.message})
   }
}


// delete detail commande
exports.deleteDetailcmdeById = async(req ,res) =>{
    try{
       const {id} = req.params;
       const detailcmde = await detailCommande.findByIdAndDelete(id);
       if(!detailcmde){
        return res.status(404).json({message : 'Détail Commande non trouvé'})
    }
    //  const updatePost = await Post.findById(id);
      res.status(200).json(detailcmde);
      console.log("Détail Commande supprimé avec succès");
  }catch(error){
         res.status(500).json({message : error.message})
   }
} 

 //  const detailcmde  = await detailCommande.create(req.body);

   // console.log(detailcmde);
  
   // res.status(201).json({ success: true, data: detailcmde });
  
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





