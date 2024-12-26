import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const checkAdminModels = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Please Login" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "create new user" });
    }
    if (user.role === "admin") {
      next();
    } else {
      return res.status(401).json({ message: "Unauthorized Access" });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};
