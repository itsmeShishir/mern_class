import User from "../models/userModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
  try {
    const {email, password, confirm_password, username, phone} = req.body;
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if(password !== confirm_password){
        return res.status(400).json({ message: "Password does not match" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({ username, email, password: hashedPassword, phone });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
export const loginUser = async (req, res) => {};
export const ChangePassword = async (req, res) => {};
export const updateProfile = async (req, res) => {};
export const logoutUser = async (req, res) => {};
