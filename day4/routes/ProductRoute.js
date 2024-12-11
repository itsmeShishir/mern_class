import {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  deleteAllProducts,
  searchProductByTitle,
} from "../controller/productController.js";
import express from "express";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.patch("/:id", updateProductById);
router.delete("/:id", deleteProductById);
router.delete("/:id", deleteAllProducts);
router.post("/search", searchProductByTitle);

export default router;
