const mongoose = require('mongoose')

const platSchema = new mongoose.Schema(
   {
    nom: {
      type: String,
      required: true
    },
      prix : {
            type : Number,
            required: true,        
      }, 
      categories :{
        type: String,
        required: true,
      }, 
      description :{
        type : String,
      },
   // menus: {
   //     type : mongoose.Schema.Types.ObjectId,
   //     ref : "menu"
   // }
       
});
const Plat = mongoose.model('Plat', platSchema);
module.exports = Plat;