import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export async function handleCreateNewUser(req, res){
  
   try { 
     const { fullName, email, password } = req.body;
 
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "some data is missing"});
    }

    let newUser = await User.create({
      fullName,
      email,
      password});
   
      return res.status(201).json({ message: "user created", user: newUser });
  } 
  catch (err) {
    return res.status(404).json({ Error: `${err}` });
  }
}

export async function handleLoginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(201).json({ messages: "some data is missing" });
    }

    let dbUser = await User.findOne({ email, password });
    if (!dbUser) {
      return res.status(404).json({ message: "no user found" });
    }
    let token = jwt.sign(
      {
        _id: dbUser._id,
        email: dbUser.email,
        role: dbUser.role,
      },process.env.JWT_PRIVATE_KEY);

    res.cookie("accessToken", token);
    return res.status(200).json({ message: "user login sucess!", accessToken: token });
  } catch (err) {
    return res.status(404).json({ error: `$(err)` });
  }
}

export async function handleLogoutUser(req, res) {}

export async function handleUpdateUser(req, res) {}

export async function handleDeleteUser(req, res) {}
