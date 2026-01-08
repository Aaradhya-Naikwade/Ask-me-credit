
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import "../components/styles/LoanTypes.css";

const loanData = [
  {
    title: "Personal Loan",
    features: ["Instant Approval", "No Collateral", "Flexible Tenure"],
    tag: "Most Popular",
    image: "/images/loans/personal-loan.jpg",
    link: "/loans/personal"
  },
  {
    title: "Business Loan",
    features: ["Scale Operations", "Low Interest", "Tax Benefits"],
    tag: "For Startups",
    image: "/images/loans/business-loan.png",
    link: "/loans/business"
  },
  {
    title: "Home Loan",
    features: ["Long Term", "Low EMI", "Quick Processing"],
    tag: "Best Rates",
    image: "/images/loans/home-loan.jpg",
    link: "/loans/home"
  },
  {
    title: "Education Loan",
    features: ["Study Abroad", "Grace Period", "Easy Repayment"],
    tag: "Student First",
    image: "/images/loans/education-loan.jpg",
    link: "/loans/education"
  },
  {
    title: "Car Loan",
    features: ["New & Used", "Zero Downpayment", "On-road Funding"],
    tag: "Instant",
    image: "/images/loans/car-loan.jpg",
    link: "/loans/car"
  },
  {
    title: "Gold Loan",
    features: ["High LTV", "Safe Storage", "Immediate Cash"],
    tag: "Secure",
    image: "/images/loans/gold-loan.png",
    link: "/loans/gold"
  },
];

const LoanTypes = () => {
  return (
    <section className="loan-section">
      <div className="container">
        <motion.div
          className="loan-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-pill">Our Offerings</span>
          <h2>
            Choose the Right <span>Loan for You</span>
          </h2>
          <p>
            Transparent terms, fast approvals, and credit solutions designed for
            your goals.
          </p>
        </motion.div>

        <div className="loan-grid">
          {loanData.map((loan, index) => (
            <motion.div
              key={index}
              className="loan-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="card-top">
                <span className="loan-tag">{loan.tag}</span>
                <h3 className="loan-title">{loan.title}</h3>
              </div>

              <div className="loan-icon-space">
                <img src={loan.image} alt={loan.title} />
              </div>

              <ul className="loan-features">
                {loan.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>

              {/* Wrapped button in a Link component */}
              <Link to={loan.link} className="loan-btn-link">
                <button className="loan-btn">
                  Apply Now
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanTypes;