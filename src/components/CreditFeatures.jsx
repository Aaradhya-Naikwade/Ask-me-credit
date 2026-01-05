import { motion } from "framer-motion";
import "./CreditFeatures.css";

const CreditFeatures = () => {
  return (
    <section className="credit-section">
      <div className="container credit-container">
        
        {/* Left Content with staggered animation */}
        <motion.div 
          className="credit-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">Why Choose Us</span>
          <h2>Get Access to Smart Credit — <span>Instantly</span></h2>
          <p className="subtitle">
            Flexible credit designed for real life—shopping, travel,
            emergencies, or business growth. Experience a seamless process from start to finish.
          </p>

          <ul className="credit-points">
            <li>
              <div className="check-icon">✓</div>
              <span>Instant eligibility & fast disbursal</span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>Fully digital — no physical paperwork</span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>Up to 30 days interest-free credit</span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>Secure & Encrypted Data Privacy</span>
            </li>
          </ul>

          <button className="learn-more-btn">
            Learn More
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
               <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </motion.div>

        {/* Right Image with floating animation */}
        <motion.div 
          className="credit-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-wrapper">
            <img src="src/assets/Demo.avif" alt="Credit Features" />
            <div className="feature-overlay-card">
              <h4>98%</h4>
              <p>Approval Rate</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default CreditFeatures;