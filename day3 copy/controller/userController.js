import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
  try {
    
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
export const login = async (req, res) => {};
export const changePassword = async (req, res) => {};
export const updateProfile = async (req, res) => {};
