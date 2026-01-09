import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import leadRoutes from "./routes/leadRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

/* ---------- MIDDLEWARE ---------- */

// VERY IMPORTANT: parse JSON body
app.use(express.json());

// CORS (local + future production)
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

// VERY IMPORTANT: allow preflight requests
app.options("*", cors());

/* ---------- DATABASE ---------- */
connectDB();

/* ---------- ROUTES ---------- */
app.use("/api/leads", leadRoutes);
app.use("/api/admin", adminRoutes);

/* ---------- HEALTH CHECK ---------- */
app.get("/", (req, res) => {
  res.status(200).json({ message: "Ask Me Credit Backend Running" });
});

/* ---------- SERVER ---------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
