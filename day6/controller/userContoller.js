import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
  try {
    const { email, password, confirm_password, username, phone } = req.body;
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if (password !== confirm_password) {
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
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT, {
      expiresIn: "1d",
    });
    res.status(200).json({
      token,
      id: user._id,
      username: user.username,
      email: user.email,
      phone: user.phone,
    });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
export const ChangePassword = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Access Denied" });
    }
    const decoded = jwt.verify(token, process.env.JWT);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { old_password, new_password, confirm_password } = req.body;
    const isMatch = await bcrypt.compare(old_password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    if (new_password == old_password) {
      return res
        .status(400)
        .json({ message: "New password cannot be same as old password" });
    }
    if (new_password !== confirm_password) {
      return res.status(400).json({ message: "Password does not match" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(new_password, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ message: "Password changed successfully" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
export const updateProfile = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Access Denied" });
    }
    const decoded = jwt.verify(token, process.env.JWT);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { email, phone, username } = req.body;
    user.email = email;
    user.phone = phone;
    user.username = username;
    // const updateUser = new User({ email, phone, username });
    await user.save();
    res.status(200).json({ message: "change profile successfully" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
export const logoutUser = async (req, res) => {};
