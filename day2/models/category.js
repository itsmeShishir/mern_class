const mongoose = require("mongoose");

const cateogrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    categoryImage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", cateogrySchema);
module.exports = Category;
