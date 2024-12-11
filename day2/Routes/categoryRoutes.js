const express = require("express");
const {
  createCategory,
  getCategory,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  deleteAllCategories,
} = require("../controller/categoryController");
const app = express();

const router = express.Router();
router.post("/", createCategory);
router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.put("/:id", updateCategoryById);
router.delete("/:id", deleteCategoryById);
router.delete("/", deleteAllCategories);

module.exports = router;
