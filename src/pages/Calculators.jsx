import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Calculators.css";

const calculators = [
  {
    title: "EMI Calculator",
    description:
      "Calculate your monthly EMI easily based on loan amount, tenure, and interest rate.",
    link: "/emi-calculator",
  },
  {
    title: "Personal Loan Calculator",
    description:
      "Estimate EMIs and total interest for your personal loan instantly.",
    link: "/personal-loan-calculator",
  },
  {
    title: "Home Loan Calculator",
    description:
      "Plan your home loan with accurate EMI, tenure, and interest insights.",
    link: "/home-loan-calculator",
  },
  {
    title: "Business Loan Calculator",
    description:
      "Understand repayment structure and interest cost for business loans.",
    link: "/business-loan-calculator",
  },
  {
    title: "Car Loan Calculator",
    description:
      "Check EMIs for new or used car loans with flexible tenure options.",
    link: "/car-loan-calculator",
  },
  {
    title: "Two-Wheeler Loan Calculator",
    description:
      "Check EMIs for new or used car loans with flexible tenure options.",
    link: "/two-wheeler-loan-calculator",
  },
  {
    title: "Commercial Vehicle Loan Calculator",
    description:
      "Check EMIs for new or used car loans with flexible tenure options.",
    link: "/commercial-vehicle-loan-calculator",
  },
  {
    title: "Loan Eligibility Calculator",
    description:
      "Know how much loan amount you are eligible for based on income.",
    link: "/calculators/eligibility",
  },
];

const Calculators = () => {
  const navigate = useNavigate();

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
          <span className="section-pill">Smart Financial Tools</span>
          <h2>
            Smart <span>Loan Calculators</span>
          </h2>
          <p>
            Make informed decisions using our simple and accurate financial
            calculators.
          </p>
        </motion.div>

        <div className="loan-grid">
          {calculators.map((item, index) => (
            <motion.div
              key={index}
              className="loan-card clickable"
              onClick={() => navigate(item.link)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="card-content">
                <h3 className="loan-title">{item.title}</h3>
                <p className="loan-desc">{item.description}</p>
              </div>

              <div className="card-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculators;
