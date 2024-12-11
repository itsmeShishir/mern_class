const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    qaanitity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const OrderItems = mongoose.model("OrderItems", orderItemSchema);
module.exports = OrderItems;
