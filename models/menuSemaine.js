const mongoose = require('mongoose')

const menuSemaineSchema = new mongoose.Schema(
    {
        libelle_semaine:{
            type: String,
            required: true
        },
        date_debut:{
           type: Date,
           required: true
        },
        date_fin:{
            type: Date,
            required: true
         },
      
        created_at: {
            type: Date,
            default: Date.now
        },
        menus:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "menuJour"
        }
    ]
    }
)
const menuSemaine = mongoose.model('menu_semaine', menuSemaineSchema);
module.exports = menuSemaine;