import express from "express";
import mongoose from "./db/connect.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import dotenv from "dotenv";
const app = express();

dotenv.config();
app.use(express.json()); // middleware
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/category", CategoryRoute);
app.use("/product", ProductRoute);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
