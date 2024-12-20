import {
  registerUser,
  loginUser,
  ChangePassword,
  updateProfile,
  logoutUser,
} from "../controller/userContoller.js";
import express from "express";
import { checkAdminModels } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/updatepassword", ChangePassword);
router.patch("/updateprofile", checkAdminModels, updateProfile);
router.get("/logout", logoutUser);
export default router;
