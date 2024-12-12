import {
  registerUser,
  loginUser,
  ChangePassword,
} from "../controller/userContoller.js";
import express from "express";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/updatepassword", ChangePassword);
export default router;
