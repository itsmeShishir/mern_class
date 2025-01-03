import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";
import { uploadProductImage } from "../middleware/multer.js";

// getproduct, createproduct,
// getproductbyid, updateproduct,
// deleteproductbyid, deleteallproducts,
// getproductsbycategory, searchproductbytitle

export const createProduct = async (req, res) => {
  try {
    let { title, description, price, stock, category, isFeatured, image } =
      req.body;
    if (req.file) {
      image = req.file.path;
    }
    let newProduct = new Product({
      title,
      description,
      price,
      stock,
      category,
      isFeatured,
      productImage: image,
    });
    await newProduct.save();
    res.send(image);
  } catch (e) {
    res.send(e.message);
  }
};
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
export const getProductById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(products);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
export const updateProductById = async (req, res) => {
  try {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(202).json(products);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
export const deleteProductById = async (req, res) => {
  try {
    const products = await Product.findByIdAndDelete(req.params.id);
    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(202).json(products);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
export const deleteAllProducts = async (req, res) => {
  try {
    const products = await Product.deleteMany();
    res.status(202).json(products);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
export const searchProductByTitle = async (req, res) => {
  try {
    const { title } = req.body;
    const products = await Product.find({ title: title });
    res.status(200).json(products);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
// assignmentbonus
export const getProductsByCategory = async (req, res) => {};
