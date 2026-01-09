
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styles/Loans.css";
import Footer from "../components/Footer";


const loanTypes = [
  {
    title: "Personal Loan EMI",
    description: "Calculate your Personal Loan EMIs in seconds",
    link: "/loans/personal",
    image: "/images/loans/personal-loan.jpg",
  },
  {
    title: "Business Loan",
    description: "Scale your operations with customized funding.",
    link: "/loans/business",
    image: "/images/loans/business-loan.png",
  },
  {
    title: "Home Loan",
    description: "Lowest interest rates for your dream home.",
    link: "/loans/home",
    image: "/images/loans/home-loan.jpg",
  },
  {
    title: "Education Loan",
    description:
      "Support higher education in India or abroad with flexible repayment options.",
    link: "/loans/education",
    image: "/images/loans/education-loan.jpg",
  },
  {
    title: "Working Capital Loan",
    description: "Manage daily operations and cash flow gaps easily.",
    link: "/loans/working-capital",
    image: "/images/loans/working-capital-loan.jpg",
  },

  {
    title: "Loan Against Property",
    description: "Unlock the value of your property for big needs.",
    link: "/loans/lap",
    image: "/images/loans/loan-against-property.jpg",
  },
  {
    title: "Overdraft Facility",
    description: "Pay interest only on the amount you actually use.",
    link: "/loans/overdraft",
    image: "/images/loans/od.png",
  },
  {
    title: "Car Loan",
    description: "Drive home your dream car with instant approval.",
    link: "/loans/car",
    image: "/images/loans/car-loan.jpg",
  },
  {
    title: "Gold Loan",
    description: "Instant cash against your gold ornaments.",
    link: "/loans/gold",
    image: "/images/loans/gold-loan.jpg",
  },
  {
    title: "Two-Wheeler Loan",
    description:
      "Own your bike easily with fast approvals and budget-friendly EMIs.",
    link: "/loans/two-wheeler",
    image: "/images/loans/two-wheeler-loan.jpg",
  },
  {
    title: "Commercial Vehicle Loan",
    description:
      "Loans designed for trucks, buses, and commercial vehicles to grow your fleet.",
    link: "/loans/commercial-vehicle",
    image: "/images/loans/commercial-vehicle-loan.jpg",
  },
];

const LoanTypes = () => {
  const navigate = useNavigate();

  return (
    <section className="loan-section">
      <div className="container">
        <motion.div
          className="loan-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-pill">Loan Categories</span>
          <h2>Types of <span>Loans</span></h2>
        </motion.div>

        <div className="loan-grid">
          {loanTypes.map((item, index) => (
            <motion.div
              key={index}
              className="loan-card"
              onClick={() => navigate(item.link)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="card-text-content">
                <h3 className="loan-title">{item.title}</h3>
                <p className="loan-desc">{item.description}</p>
              </div>

              <div className="card-footer">
                <div className="circle-arrow-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>

                <div className="card-illustration">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanTypes;
