// import { useState } from "react";
// import { motion } from "framer-motion";
// import { User, Phone, MapPin, Wallet, CheckCircle } from "lucide-react";
// import "./styles/LoanForm.css";

// const LoanForm = ({ defaultLoanType = "" }) => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     loanType: defaultLoanType,
//     city: ""
//   });

//   const [status, setStatus] = useState("idle");
//   const [error, setError] = useState("");

//   const validateForm = () => {
//     const nameRegex = /^[a-zA-Z\s]+$/;
//     if (!nameRegex.test(formData.fullName)) {
//       setError("Name should only contain letters.");
//       return false;
//     }

//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(formData.phone)) {
//       setError("Please enter a valid 10-digit phone number.");
//       return false;
//     }

//     if (!formData.loanType || !formData.city) {
//       setError("Please fill in all fields.");
//       return false;
//     }

//     setError("");
//     return true;
//   };

//   const submitLead = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setStatus("loading");

//     // Submission delay
//     setTimeout(() => {
//       setStatus("success");
//       setFormData({
//         fullName: "",
//         phone: "",
//         loanType: defaultLoanType,
//         city: ""
//       });
//     }, 800);
//   };

//   /* ---------- SUCCESS VIEW ---------- */
//   if (status === "success") {
//     return (
//       <motion.div
//         className="premium-loan-card success-view"
//         initial={{ scale: 0.9 }}
//         animate={{ scale: 1 }}
//       >
//         <CheckCircle size={60} color="#22c55e" />
//         <h3>Application Sent!</h3>
//         <p>Our team will contact you shortly.</p>
//         <button
//           onClick={() => setStatus("idle")}
//           className="premium-submit"
//         >
//           Send Another
//         </button>
//       </motion.div>
//     );
//   }

//   /* ---------- FORM VIEW ---------- */
//   return (
//     <motion.div className="premium-loan-card">
//       <div className="form-brand">
//         <h3>Apply for Financing</h3>
//         <p>Quick 2-minute application</p>
//       </div>

//       <form className="premium-form" onSubmit={submitLead}>
//         <div className="input-grid">
//           <div className="input-group">
//             <User className="input-icon" size={18} />
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={(e) =>
//                 setFormData({ ...formData, fullName: e.target.value })
//               }
//               required
//             />
//           </div>

//           <div className="input-group">
//             <Phone className="input-icon" size={18} />
//             <input
//               type="text"
//               placeholder="10-Digit Phone Number"
//               value={formData.phone}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   phone: e.target.value.replace(/\D/g, "").slice(0, 10)
//                 })
//               }
//               required
//             />
//           </div>

//           <div className="input-group">
//             <Wallet className="input-icon" size={18} />
//             <select
//               value={formData.loanType}
//               onChange={(e) =>
//                 setFormData({ ...formData, loanType: e.target.value })
//               }
//               required
//             >
//               <option value="" disabled>Select Loan Type</option>
//               <option value="Personal Loan">Personal Loan</option>
//               <option value="Home Loan">Home Loan</option>
//               <option value="Business Loan">Business Loan</option>
//               <option value="Car Loan">Vehicle Loan</option>
//             </select>
//           </div>

//           <div className="input-group">
//             <MapPin className="input-icon" size={18} />
//             <input
//               type="text"
//               placeholder="Current City"
//               value={formData.city}
//               onChange={(e) =>
//                 setFormData({ ...formData, city: e.target.value })
//               }
//               required
//             />
//           </div>
//         </div>

//         {error && <p className="error-message">{error}</p>}

//         <motion.button
//           whileTap={{ scale: 0.98 }}
//           className={`premium-submit ${
//             status === "loading" ? "btn-loading" : ""
//           }`}
//           type="submit"
//           disabled={status === "loading"}
//         >
//           {status === "loading" ? "Processing..." : "Submit Request"}
//         </motion.button>
//       </form>
//     </motion.div>
//   );
// };

// export default LoanForm;








// Backend integrated
import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, MapPin, Wallet, CheckCircle } from "lucide-react";
import "./styles/LoanForm.css";

const API_URL = import.meta.env.VITE_API_URL;

const LoanForm = ({ defaultLoanType = "" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    loanType: defaultLoanType,
    city: ""
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.fullName)) {
      setError("Name should only contain letters.");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }

    if (!formData.loanType || !formData.city) {
      setError("Please fill in all fields.");
      return false;
    }

    setError("");
    return true;
  };

  const submitLead = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");

    try {
      const response = await fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setFormData({
        fullName: "",
        phone: "",
        loanType: defaultLoanType,
        city: ""
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  /* ---------- SUCCESS VIEW ---------- */
  if (status === "success") {
    return (
      <motion.div
        className="premium-loan-card success-view"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >
        <CheckCircle size={60} color="#22c55e" />
        <h3>Application Sent!</h3>
        <p>Our team will contact you shortly.</p>
        <button
          onClick={() => setStatus("idle")}
          className="premium-submit"
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  /* ---------- FORM VIEW ---------- */
  return (
    <motion.div className="premium-loan-card">
      <div className="form-brand">
        <h3>Apply for Financing</h3>
        <p>Quick 2-minute application</p>
      </div>

      <form className="premium-form" onSubmit={submitLead}>
        <div className="input-grid">
          <div className="input-group">
            <User className="input-icon" size={18} />
            <input
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            />
          </div>

          <div className="input-group">
            <Phone className="input-icon" size={18} />
            <input
              type="text"
              placeholder="10-Digit Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value.replace(/\D/g, "").slice(0, 10)
                })
              }
              required
            />
          </div>

          <div className="input-group">
            <Wallet className="input-icon" size={18} />
            <select
              value={formData.loanType}
              onChange={(e) =>
                setFormData({ ...formData, loanType: e.target.value })
              }
              required
            >
              <option value="" disabled>Select Loan Type</option>
              <option value="Personal Loan">Personal Loan</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Business Loan">Business Loan</option>
              <option value="Car Loan">Vehicle Loan</option>
            </select>
          </div>

          <div className="input-group">
            <MapPin className="input-icon" size={18} />
            <input
              type="text"
              placeholder="Current City"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              required
            />
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <motion.button
          whileTap={{ scale: 0.98 }}
          className={`premium-submit ${
            status === "loading" ? "btn-loading" : ""
          }`}
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Processing..." : "Submit Request"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default LoanForm;
