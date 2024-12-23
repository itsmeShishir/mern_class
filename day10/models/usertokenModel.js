// Store jet token
import mongoose from "mongoose";

const usertokenSchema = new mongoose.Schema(
  {
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    jwt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const UserToken = mongoose.model("usertoken", usertokenSchema);
export default UserToken;
