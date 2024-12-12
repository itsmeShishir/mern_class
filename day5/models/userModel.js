import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures no duplicate emails
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: false,
    },
    role: {
      type: Boolean,
      default: false,
      required: true,
    }, // it can b
  },
  { timestamps: true }
);

// 


const User = mongoose.model("User", userSchema);

export default User;
