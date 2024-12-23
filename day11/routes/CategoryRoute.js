import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  deleteAllCategories,
} from "../controller/categoryController.js";
import express from "express";
import { checkAdminModels } from "../middleware/authmiddleware.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.post("/", createCategory);
router.patch("/:id", updateCategoryById);
router.delete("/:id", deleteCategoryById);
router.delete("/", deleteAllCategories);
export default router;
