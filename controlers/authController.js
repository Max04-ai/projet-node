const  User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { request } = require("express");

dotenv.config()

/**
 * @desc    Create user
 * @route   POST /api/v1/users/register
 * @access  Private/Admin
 */
const registerUser = asyncHandler(async (req, res) => {

  const { nom, prenom, email, password, role} = req.body;
  if (!nom ||!prenom|| !email || !password || !role) {
    res.status(400);
    res.send("Tous les champs sont obligatoires");
   // throw new Error("Tous les champs sont obligatoires!");
  }
 // const userAvailable = await User.findOne({ email });
 console.log(email);
 const userFound = await User.findOne({ email });

  if (userFound) {
    res.status(400);
    throw new Error("Utilisateur déja enregistré!");
  }
  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
 
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    nom,
    prenom,
    email,
    password: hashedPassword,
    role
  });
  console.log(`Utilisateur crée avec succès ${user}`);
  if (user) {
   // return res.status(200).json({ data: result });
   res.status(201).json({ _id: user.id, email: user.email , role: user.role});
  } else {
    res.status(400);
    throw new Error("Les données utiisateurs ne sont pas valides");
  }
  res.json({ message: "Enregistrement de l'utilisateur" });
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Tous les champs sont obligatoires");
}

  const user = await User.findOne({
      email
    }
  );
  //compare password with hashedpassword
  console.log(user.role)
 // console.log(req.user.role)

  if (user && (await bcrypt.compare(password, user.password, function(err, result){
    if(result){
      const accessToken = jwt.sign(
        {
          user: {
            email: user.email,
            id: user.id,
            role: user.role
           // isAdmin: user.isAdmin
          },
        },
        process.env.ACCESS_token_SECRET,
        { expiresIn: "90d" }
      );
      res.cookie('token', 'accessToken', { maxAge: 900000, httpOnly: true });

      console.log(res.cookie.token);
      res.status(200).json({ accessToken });
    }
    else{
      res.status(401).json("email ou mot de passe invalides");
    }

  }))) {
    
  }
};

//@desc Current user info
//@route POST /api/users/current
//@access private

const currentUser = async (req, res) => {
  res.json(req.user);
};

/**
 * @desc    Create user
 * @route   POST /api/v1/users
 * @access  Private/Admin
 */
//exports.createUser = asyncHandler(async (req, res, next) => {
//  const user = await User.create(req.body);
  
//  res.status(201).json({ success: true, data: user });
//})

/**
 * @desc    Update user
 * @route   PUT /api/v1/users/:id
 * @access  Private/Admin
 */
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  
  res.status(200).json({ success: true, data: user });
})

/**
 * @desc    Delete user
 * @route   DELETE /api/v1/users/:id
 * @access  Private/Admin
 */
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);
  
  res.status(200).json({ success: true, data: {} });
})

/**
 * @desc    Get a user
 * @route   POST /api/v1/users/:id
 * @access  Private/Admin
 */
const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({ success: true, data: user });
})

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des utilisateurs.' });
  }
};


module.exports = { registerUser, loginUser, currentUser,getUser, getAllUsers};

// const accessToken = jwt.sign(
  //     {
  //        "UserInfo":{
  //          "username": foundUser.username,
  //          "roles": roles
  //        }
  //     },
  //) 



