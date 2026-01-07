const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {
  createLead,
  getAllLeads,
  updateLead,
  deleteLead
} = require("../controllers/lead.controller");

router.post("/", createLead);          // Public (LoanForm)
router.get("/", auth, getAllLeads);     // Admin only
router.put("/:id", auth, updateLead);   // Admin only
router.delete("/:id", auth, deleteLead);// Admin only

module.exports = router;
