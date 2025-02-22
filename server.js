import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import path from "path";
import { fileURLToPath } from "url";

// App config
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Serve static uploads
app.use('/uploads', express.static('uploads'));

// Database connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
