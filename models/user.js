const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
      nom :{
        type : String,
        required: true
      },
      prenom :{
        type : String,
        required: true
      },
      email :{
            type: String,
            required: [true, 'Svp entrez un adresse mail valide'],
            unique: true,
        },
        password :{
            type: String,
            required: true,
            minlength: [6, 'Le mot de passe doit etre au minimum de 6 caractères'],
        },
        role: {
            type: String,
            required: true,
            enum: ["client", "admin", "gerant"],
          }, 
        created_at: {
            type: Date,
            default: Date.now
        },    
    }
)
const User = mongoose.model('User', userSchema);
module.exports = User;

//userSchema.statics.estAdmin = function (role) {
//  return role === 'admin';
//};


