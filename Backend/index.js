import express from "express";
import dotenv from "dotenv";
import connectDB from "./Configs/db.js";
import cors from "cors";
import bookRoutes from "../Backend/Routes/bookRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/books", bookRoutes);

connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
