import express from "express";
import mongoose from "./db/connect.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import UserRouter from "./routes/UserRoute.js";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import path from "path";
import { uploadProductImage } from "./middleware/multer.js";

const app = express();

dotenv.config();
app.use(express.json()); // middleware
app.use(express.urlencoded({ extended: true }));
//  top link the images
app.use("/uploads", 
  express.static(path.join(path.resolve(), "/uploads")));

let allowedOrigins = ["http://localhost:5173"];
app.use(cors(allowedOrigins));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/user", UserRouter);
app.use("/category", CategoryRoute);
app.use("/product", ProductRoute);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
