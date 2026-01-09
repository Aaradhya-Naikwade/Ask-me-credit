import express from "express";
import { loginAdmin } from "../controllers/adminController.js";

const router = express.Router();

/* ---------- ADMIN LOGIN ---------- */
router.post("/login", loginAdmin);

export default router;
