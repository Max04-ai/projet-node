const Client = require("../models/commande");

// Create a client
exports.createClient = (req,res) => {
    const client = new Client(req.body);  
    
    client.save().then(result => {
     
      return res.status(200).json({
       client : result 
      })
    })
}

// Get client by ID
exports.getClientbyID =  async (req, res) => {
    try{
        const {id} = req.params;
        const client = await Client.findById(id);
        res.status(200).json(client);
        }catch(error){
          res.status(500).json({message : error.message})
        }
}

// Get clients
exports.getClients = (req, res) => {
    const client = Client.find()
    .then((commandes) => {
        res.status(200).json
    })
    .catch(err => console.log("Erreur"));
}

// Delete client
exports.deleteClient = async (req ,res)=> {
    try{
        const {id} = req.params;
        const client = await Client.findByIdAndDelete(id);
        if(!client){
         return res.status(404).json({message : 'Client non trouvé'})
     }
     //  const updatePost = await Post.findById(id);
       res.status(200).json(client);
       console.log("Client supprimé avec succès");
   }catch(error){
          res.status(500).json({message : error.message})
    }
}

exports.updatebyID = async(req ,res) =>{
    try{
      const {id} = req.params;
      const client = await Client.findByIdAndUpdate(id, req.body);
       if(!client){
       return res.status(404).json({message : 'Client introuvable'})
    }
    const updateClient = await Client.findById(id);
    res.status(200).json(updateClient);
    console.log("Client modifié avec succès");
  }catch(error){
        res.status(500).json({message : error.message})
     }
  }
