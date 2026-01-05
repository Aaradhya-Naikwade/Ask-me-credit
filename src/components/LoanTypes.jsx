
import { motion } from "framer-motion";
import "./LoanTypes.css";

const loanData = [
    {
        title: "Personal Loan",
        features: ["Instant Approval", "No Collateral", "Flexible Tenure"],
        tag: "Most Popular"
    },
    {
        title: "Business Loan",
        features: ["Scale Operations", "Low Interest", "Tax Benefits"],
        tag: "For Startups"
    },
    {
        title: "Home Loan",
        features: ["Long Term", "Low EMI", "Quick Processing"],
        tag: "Best Rates"
    },
    {
        title: "Education Loan",
        features: ["Study Abroad", "Grace Period", "Easy Repay"],
        tag: "Student First"
    },
    {
        title: "Car Loan",
        features: ["New & Used", "Zero Downpayment", "On-road Funding"],
        tag: "Instant"
    },
    {
        title: "Gold Loan",
        features: ["High LTV", "Safe Storage", "Immediate Cash"],
        tag: "Secure"
    }
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
                    <h2>Choose the Right <span>Loan for You</span></h2>
                    <p>Find the perfect financial solution with transparent terms and rapid processing.</p>
                </motion.div>
        
                <div className="loan-grid">
                    {loanData.map((loan, index) => (
                        <motion.div
                            key={index}
                            className="loan-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >   
                            <div className="card-top">
                                <span className="loan-tag">{loan.tag}</span>
                                <h3 className="loan-title">{loan.title}</h3>
                            </div>

                            <div className="loan-icon-space"></div>

                            <ul className="loan-features">
                                {loan.features.map((feat, i) => (
                                    <li key={i}>{feat}</li>
                                ))}
                            </ul>

                            <button className="loan-btn">
                                Apply Now
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LoanTypes;