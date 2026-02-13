import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import connectDB from "../config/db.js";
import app from "./app.js"; 

const PORT = process.env.PORT || 5001;
connectDB();

app.use(cors({
  origin: "http://localhost:5173", // your Vite frontend
  credentials: true
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

