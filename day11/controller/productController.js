import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";
import { uploadProductImage } from "../middleware/multer.js";

// getproduct, createproduct,
// getproductbyid, updateproduct,
// deleteproductbyid, deleteallproducts,
// getproductsbycategory, searchproductbytitle
export const searchProductByTitle = async (req, res) => {
  const { title } = req.query;
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  try {
    const products = await Product.find({
      title: { $regex: title, $options: "i" },
    }).populate("category", "name");
    if (products.length == 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(products);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

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
    const products = await Product.find().populate("category", "name");
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
    if (req.file) {
      const product = await Product.findById(req.params.id);
      if (product.productImage) {
        fs.unlinkSync(product.productImage);
      }
      products.productImage = req.file.path;
      await products.save();
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
    if (req.file) {
      const product = await Product.findById(req.params.id);
      if (product.productImage) {
        fs.unlinkSync(product.productImage);
      }
      await products.save();
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

// assignmentbonus
export const getProductsByCategory = async (req, res) => {
  const category = req.params.id;
  if (!category) {
    return res.status(400).json({ message: "Category is required" });
  }
  try {
    const products = await Product.find({ category });
    if (products.length == 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(products);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
