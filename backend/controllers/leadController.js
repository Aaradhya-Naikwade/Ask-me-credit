import Lead from "../models/Lead.js";

/* ---------- CREATE LEAD (USER FORM SUBMIT) ---------- */
export const createLead = async (req, res) => {
  try {
    const { fullName, phone, loanType, city } = req.body;

    if (!fullName || !phone || !loanType || !city) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const lead = await Lead.create({
      fullName,
      phone,
      loanType,
      city
    });

    res.status(201).json({
      message: "Lead created successfully",
      lead
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* ---------- GET ALL LEADS (ADMIN) ---------- */
export const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* ---------- UPDATE LEAD STATUS (ADMIN) ---------- */
export const updateLeadStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["Active", "Inactive"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.status(200).json({
      message: "Status updated successfully",
      lead
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* ---------- DELETE LEAD (ADMIN) ---------- */
export const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.status(200).json({ message: "Lead deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
