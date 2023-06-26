const jwt = require('jsonwebtoken');
const User = require("../models/user");
const dotenv = require("dotenv");

//const ErrorResponse = require('../utils/errorResponse');

dotenv.config();

exports.verifyUserToken = (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(401).send("Requete non autorisé");
    }
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) {
      return res.status(401).send("Accès refusé");
    }
    try {
      //  console.log(token);
      const decoded = jwt.verify(token, process.env.ACCESS_token_SECRET);
      req.user = decoded.user;
      next();
    } catch (err) {
      res.status(400).send("Token invalide");
    }
};

// admin middleware

exports.isAdmin = (req, res, next) =>{
  console.log(req.user);
 //console.log(req.nom);
 //console.log(req.user.email);
 console.log(req.user.role);
    if (req.user.role === 'client'){
      res.status(400).json('accès refusé');  
    //  return next (new ErrorResponse('Accès refusé', 401));
   }
 next();

} 



// check if user is authenticated
//exports.isAuthenticated = async (req, res, next) =>{

    // Bearer <token>>

  //  const token = req.headers.authorization.split(' ')[1];

 // const authHeader = req.headers.authorization;
 // const token = authHeader.split(" ")[1];

//  try {
//    // Verify the token is valid
//    const { user } = jwt.verify(token, process.env.JWT_SECRET);
//    return res.status(200).json({
 //     message: `Felicitation ${user}! Vous pouvez accéder à cette ressource`,
 //   });
 // } catch (error) {
   // return res.status(401).json({ error: "Pas autorisé" });
 // }
//};

   // let token = '';
  //  const bearHeader = req.headers['authorization'];

  //  if(typeof bearHeader != 'undefined'){
  //      const bearer = bearHeader.split();
  //      const bearerToken = bearer[1];
  //      token = bearerToken;
  //  }

    // make sure token exists
 //   if (!token){
 //      res.status(400).json('accès refusé');
 //   }

   // try {
        //verify token
    //    console.log(token);
    //    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //    req.user = await User.findById(decoded.id);
    //    next();

   // } catch (error) {
    //    res.status(400).json('accès refusé');
        
    //}
