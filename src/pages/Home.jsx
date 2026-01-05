import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LoanTypes from "../components/LoanTypes";
import CreditFeatures from "../components/CreditFeatures";
import StatsSection from "../components/StatsSection";
import WhySection from "../components/WhySection";
import CultureSection from "../components/CultureSection";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

import "./Home.css";

const Home = () => {
  const [index, setIndex] = useState(0);
  const words = ["Simple Decisions", "Fast Approvals", "Better Rates", "Secure Future"];

  // Cycle through words every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="home">
        {/* Modern Background Accents */}
        <div className="bg-blur-circle blue"></div>
        <div className="bg-blur-circle light"></div>

        <div className="home-wrapper">
          {/* Left Content */}
          <motion.div
            className="home-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Smart Loans, <br />
              <div className="text-switcher">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    className="gradient-text"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            <p>
              Experience the future of credit. Compare competitive rates,
              get transparent EMI breakdowns, and secure quick approvals
              all in one place.
            </p>


            <div className="home-actions">
              <button className="primary-btn">Apply for Loan</button>
              <button className="secondary-btn">Calculate EMI</button>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="home-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="img-wrapper">
              <img src="src/assets/Demo.avif" alt="Financial Dashboard" />
              <div className="img-glow"></div>
            </div>
          </motion.div>
        </div>
      </main>

      <LoanTypes />
      <CreditFeatures />
      <StatsSection />
      <WhySection />
      <CultureSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;