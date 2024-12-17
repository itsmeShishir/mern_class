import Category from "../models/categoryModel.js";

export const createCategory = async (req, res) => {
  try {
    const category = req.body;
    const newCategory = new Category(category);
    await newCategory.save();
    res
      .status(201)
      .json({ message: "Category created successfully", category });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const updateCategoryById = async (req, res) => {
  try {
    const category = req.body;
    const updateCategory = await Category.findByIdAndUpdate(
      req.params.id,
      category,
      { new: true }
    );
    res.send(updateCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const deleteCategoryById = async (req, res) => {
  try {
    const deleteCategory = await Category.findByIdAndDelete(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
    res.send(deleteCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export const deleteAllCategories = async (req, res) => {
  try {
    const deleteAllCategories = await Category.deleteMany();
    res.json({ message: "All categories deleted" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
