
import { motion } from "framer-motion";
import {
  FiLock,
  FiZap,
  FiSmile,
} from "react-icons/fi";

import { FaRupeeSign } from "react-icons/fa";

import "../components/styles/WhySection.css";

const reasons = [
  {
    id: 1,
    title: "Trusted Platform",
    description: "Your data is protected with industry-grade security.",
    icon: <FiLock />,
  },
  {
    id: 2,
    title: "Quick Approval",
    description: "Fast eligibility checks and rapid disbursal.",
    icon: <FiZap />,
  },
  {
    id: 3,
    title: "Transparent Pricing",
    description: "No hidden fees, fully transparent terms.",
    icon: <FaRupeeSign />,
  },
  {
    id: 4,
    title: "Easy to Use",
    description: "Simple interface with a smooth application flow.",
    icon: <FiSmile />,
  },
];

const WhySection = () => {
  return (
    <section className="why-section">
      <div className="container why-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="why-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2>
            Why <span>Ask Me Credit?</span>
          </h2>

          <p>
            We’re transforming how you access credit. Built for speed,
            transparency, and security — so you can focus on what truly matters.
          </p>

          <div className="feature-grid">
            {reasons.map((reason) => (
              <div className="feature-card" key={reason.id}>
                <div className="icon-placeholder">
                  {reason.icon}
                </div>
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="why-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/images/why-section.png"
            alt="Why Choose Ask Me Credit"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
