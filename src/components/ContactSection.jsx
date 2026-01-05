import { motion } from "framer-motion";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container contact-container">
        
        {/* Left Content */}
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="contact-pill">Support</span>
          <h2>Have Questions? <br /> We're <span>Always Here</span> to Help.</h2>
          <p>
            Whether you're curious about loan eligibility, interest rates, or 
            just want to say hello, our dedicated team is ready to guide you 
            every step of the way.
          </p>

          <div className="contact-actions">
            <button className="contact-main-btn">
              Get in Touch
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          className="contact-right"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="contact-img-wrapper">
            <img src="src/assets/Demo.avif" alt="Customer Support" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;