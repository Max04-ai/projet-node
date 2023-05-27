const mongoose = require('mongoose')

const platSchema = new mongoose.Schema(
   {
      prix : {
            type : Number,
            required: true,        
      }, 
      categories :{
        type: [String],
        required: true,
      },   
 
    menus: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "menu"
    }
       
});
const Plat = mongoose.model('Plat', platSchema);
module.exports = Plat;

const clientSchema = new mongoose.Schema(
   {
    nom: {
            type : String,
            required: true,           
      },
    prenom :{
        type: String,
        required: true
      },
    adresse_client:{
        type: String,
        required: true
      },
    created_at: {
        type: Date,
        default: Date.now
        }, 
});
const Client = mongoose.model('Client', clientSchema);
module.exports = Client;

const userSchema = new mongoose.Schema(
    {username :{
            type : String,
            required :true,
        },
        photo : String,
      email :{
            type: String,
            required: [true, 'Svp entrez un adresse mail valide'],
            unique: true,
        },
        password :{
            type: String,
            required: true,
            minlength: [6, 'Le mot de passe doit etre au minimum de 6 caractères'],
            select: false
        },
        is_admin :{
             type: Boolean,
        },
        is_verified:{
            type: Boolean,
        },     
        role: {
            type: Number,
            required: true,
            enum: ['user', 'admin','client']
        },
        created_at: {
            type: Date,
            default: Date.now
        }, 
          //  confirm_password: {
      //      type: String,
      //      required: true
      //  },      

    }
)
const User = mongoose.model('User', userSchema);
module.exports = User;

const menuSchema = new mongoose.Schema(
    {
        nom:{
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
    }
)
const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;

const commandeSchema = new mongoose.Schema(
    {
       status:{
           type: String,
           required: true,
           default: "En attente"
        },
        date_cmde:{
            type : Date,
            required: true
        },
        adresse_liv:{
            type: String,
            required: true
        },
      //  plat_jour:{
      //    type: mongoose.Schema.Types.ObjectId,
      //    ref: "Commande",
      //    required:true
      //  },
        created_at: {
            type: Date,
            default: Date.now
          },
   //     prix_total:{
   //         type: Number,
   //     },

         clients: 
           {
             type: mongoose.Schema.Types.ObjectId,
             ref: "Client"
            }
        
}
)
const Commande = mongoose.model('Commande', commandeSchema);
module.exports = Commande;

const commandePlat = new mongoose.Schema(
    {
      commandes :{ type: mongoose.Schema.Types.ObjectId, ref: 'Commande' },
      plats :{ type: mongoose.Schema.Types.ObjectId, ref: 'Plat' },
  
  })
  
  const CommandePlat = mongoose.model('CommandePlat', commandePlat);
  
  module.exports = CommandePlat;

