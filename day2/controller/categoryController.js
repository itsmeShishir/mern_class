const Category = require("../models/category");

// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const category = req.body;
    await Category.create(category);
    res.status(201).json({ success: true, data: category });
  } catch (e) {
    res.status(400).json({ success: false, error: e.message });
  }
};

// Get all categories
exports.getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ success: true, data: categories });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({ success: true, data: category });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
};

exports.updateCategoryById = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: category });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
};

exports.deleteCategoryById = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: category });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
};

exports.deleteAllCategories = async (req, res) => {
  try {
    const categories = await Category.deleteMany();
    res.status(200).json({ success: true, message: "All categories deleted" });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
};
