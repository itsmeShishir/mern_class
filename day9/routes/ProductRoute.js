import {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  deleteAllProducts,
  searchProductByTitle,
  getProductsByCategory,
} from "../controller/productController.js";

import { uploadProductImage } from "../middleware/multer.js";
import express from "express";

const router = express.Router();

router.post("/", uploadProductImage, createProduct);
router.get("/", getProducts);
router.get("/search", searchProductByTitle);
router.get("/category/:id", getProductsByCategory);
router.get("/:id", getProductById);
router.patch("/:id", uploadProductImage, updateProductById);
router.delete("/:id", deleteProductById);
router.delete("/:id", deleteAllProducts);

export default router;
