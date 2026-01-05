import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <Navbar />
      
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="contact-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="kicker">Get in Touch</span>
            <h1>Let’s start a <span>Conversation.</span></h1>
            <p>Direct access to our financial experts and support teams.</p>
          </motion.div>

          <div className="contact-main-grid">
            {/* Left side: Contact Info */}
            <motion.div 
              className="contact-info-panel"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div>
                  <h4>Email Us</h4>
                  <p>support@askmecredit.com</p>
                  <span>Response time: Under 2 hours</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Call Our Hotline</h4>
                  <p>+91 1800 123 4567</p>
                  <span>Mon-Sat, 9am - 7pm</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Visit Headquarters</h4>
                  <p>Level 14, BKC Financial Centre,<br />Mumbai, MH 400051</p>
                </div>
              </div>

              <div className="social-presence">
                <h5>Follow our updates</h5>
                <div className="social-row">
                  <span>LinkedIn</span>
                  <span>Twitter</span>
                  <span>Instagram</span>
                </div>
              </div>
            </motion.div>

            {/* Right side: Modern Form */}
            <motion.div 
              className="contact-form-panel"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form className="modern-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <select>
                    <option>Loan Inquiry</option>
                    <option>Technical Support</option>
                    <option>Business Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="5" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  Send Message
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;