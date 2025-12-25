import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const saltRounds = 12;

export async function handleCreateNewUser(req, res){
  
   try { 
     const { firstName, lastName, email, password } = req.body;
 
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "some data is missing"});
    }
    console.log(firstName);

    bcrypt.genSalt(saltRounds, async function(err, salt) {
    bcrypt.hash(password, salt, async function(err, hash) {
     let newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hash
    });
   
      return res.status(201).json({ message: "user created ", user: newUser });
    });
});

   
  } 
  catch (err) {
    return res.status(404).json({ Error: `${err}` });
  } 
}

export async function handleLoginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ messages: "some data is missing" });
    }

    let dbUser = await User.findOne({ email });
    if (!dbUser) {
      return res.status(404).json({ message: "no user found" });
    }
    let accesstoken = jwt.sign(
      {
        _id: dbUser._id,
        email: dbUser.email,
        role: dbUser.role,
      },process.env.JWT_PRIVATE_KEY);

      let refreshToken = jwt.sign({
        _id: dbUser._id
      }, process.env.JWT_PRIVATE_KEY)

    res.cookie("accessToken", accesstoken, {
          maxAge: 1000 * 60 * 60 * 2,
          // origin: "http://localhost:5173"

    });

      res.cookie("refreshToken", refreshToken,{
        maxAge : 1000 * 60 * 60 * 24 * 5

      });
     
    return res.status(200).json({ message: "user login sucess!", accessToken: accesstoken });
  } 
  catch (err) {
    return res.status(404).json({ error: `${err}` });
  }
}

export async function handleLogoutUser(req, res) {
  try {
    res.clearCookie("accessToken");

    return res.status(200).json({ message: "user logout success!" });
  } catch (err) {
    return res.status(500).json({ error: "err" });
  }
}

export async function handleUpdateUser(req, res) {}

export async function handleDeleteUser(req, res) {}
