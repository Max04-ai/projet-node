const mongoose = require('mongoose')

const detailCommandeSchema = new mongoose.Schema(
    {
        plats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Plat',
            required: true
          },
          quantite: {
            type: Number,
            required: true
          },
          prixTotal: {
            type: Number,
            required: true
          },
        
    }
)

const detailCommande = mongoose.model('detail_commande', detailCommandeSchema);
module.exports = detailCommande;