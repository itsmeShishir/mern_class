const express = require("express");
const app = express();
const port = 3000;
const database = require("./db/database");
const categoryRoutes = require("./Routes/categoryRoutes");


require('dotenv').config()

app.use(express.json());
app.use("/category", categoryRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
