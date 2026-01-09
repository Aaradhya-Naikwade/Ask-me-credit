import express from "express";
import {
  createLead,
  getAllLeads,
  updateLeadStatus,
  deleteLead
} from "../controllers/leadController.js";

import protectAdmin from "../middleware/authMiddleware.js";

const router = express.Router();

/* ---------- ALLOW PREFLIGHT REQUEST ---------- */
router.options("/", (req, res) => {
  res.sendStatus(200);
});

/* ---------- USER FORM SUBMIT (PUBLIC) ---------- */
router.post("/", createLead);

/* ---------- ADMIN ROUTES (PROTECTED) ---------- */
router.get("/", protectAdmin, getAllLeads);
router.put("/:id", protectAdmin, updateLeadStatus);
router.delete("/:id", protectAdmin, deleteLead);

export default router;
