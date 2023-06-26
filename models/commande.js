const mongoose = require('mongoose')

const commandeSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            default: Date.now
          },
          details: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'detailCommande'
          }],
        clients: 
        {
             type: mongoose.Schema.Types.ObjectId,
             ref: "User"
        } 

}
)
const Commande = mongoose.model('Commande', commandeSchema);
module.exports = Commande;


