import {
  registerUser,
  loginUser,
  ChangePassword,
  updateProfile,
  logoutUser,
} from "../controller/userContoller.js";
import express from "express";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/updatepassword", ChangePassword);
router.patch("/updateprofile", updateProfile);
router.get("/logout", logoutUser);
export default router;
