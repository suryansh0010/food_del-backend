import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// App config
const app = express();
const PORT = process.env.PORT || 4000; // Use environment variable for flexibility

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter );

app.get("/", (req, res) => {
  res.send("API WORKING");
});
 
// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
