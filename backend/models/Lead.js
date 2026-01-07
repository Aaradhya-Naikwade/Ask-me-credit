const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    loanType: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["new", "contacted", "converted"],
      default: "new"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", LeadSchema);
