const  {User} = require("../models/model");
const asyncHandler = require("express-async-handler");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config()

/**
 * @desc    Create user
 * @route   POST /api/v1/users/register
 * @access  Private/Admin
 */
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password} = req.body;
  if (!username || !email || !password ) {
    res.status(400);
    throw new Error("Tous les champs sont obligatoires!");
  }
 // const userAvailable = await User.findOne({ email });
 const userFound = await User.findOne({ email });
  if (userFound) {
    res.status(400);
    throw new Error("Utilisateur déja enregistré!");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
 // const accessToken = jwt.sign(
  //     {
  //        "UserInfo":{
  //          "username": foundUser.username,
  //          "roles": roles
  //        }
  //     },
  //) 
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    role
  });

  console.log(`Utilisateur crée avec succès ${user}`);
  if (user) {
   // return res.status(200).json({ data: result });
   res.status(201).json({ _id: user.id, email: user.email });
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

  const user = await User.findOne({ email });
  //compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
         // isAdmin: user.isAdmin
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("email ou mot de passe pas valide");
  }
};

//@desc Current user info
//@route POST /api/users/current
//@access private

const currentUser = async (req, res) => {
  res.json(req.user);
};


module.exports = { registerUser, loginUser, currentUser };

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



