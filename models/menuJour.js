const mongoose = require('mongoose')

const menuJourSchema = new mongoose.Schema(
    {
        libelle_jour:{
            type: String,
            required: true
        },
        date_menu:{
           type: Date,
           required: true
        },
      
        created_at: {
            type: Date,
            default: Date.now
        },
        plats:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Plat"
        }
    ]
    }
)
const menuJour = mongoose.model('menu_jour', menuJourSchema);
module.exports = menuJour;