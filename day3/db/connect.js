import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://ecommerce:ecommerce@ecommerce.4fd6z.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce",
    // "mongodb://localhost:27017/dbs",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

export default mongoose;
