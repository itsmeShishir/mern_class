import express from "express";
import {
  initializePayment,
  verifyPayment,
} from "../controller/paymentController.js";

const router = express.Router();

router.post("/initialize", initializePayment);
router.post("/verify", verifyPayment);

export default router;
