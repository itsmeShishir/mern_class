import {
  registerUser,
  loginUser,
  ChangePassword,
  updateProfile,
} from "../controller/userContoller.js";
import express from "express";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/updatepassword", ChangePassword);
router.patch("/updateprofile", updateProfile);
export default router;
