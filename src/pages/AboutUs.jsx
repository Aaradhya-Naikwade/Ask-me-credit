import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="kicker">Our Story</span>
            <h1>Reimagining the future of <span>Credit in India.</span></h1>
            <p className="lead">
              Ask Me Credit was born out of a simple observation: Access to capital should be 
              as fluid as the dreams it fuels. We are bridging the gap between traditional 
              banking and modern aspirations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Split Layout */}
      <section className="mission-section">
        <div className="container mission-grid">
          <motion.div 
            className="mission-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="src/assets/Demo.avif" alt="Our Workspace" />
          </motion.div>
          
          <motion.div 
            className="mission-text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>The Mission</h2>
            <p>
              To empower 10 million underserved Indians with fair, fast, and 
              transparent credit by 2030. We believe financial inclusion is not 
              just a goal, but a fundamental right.
            </p>
            <div className="stats-row">
              <div>
                <h3>100%</h3>
                <p>Digital Process</p>
              </div>
              <div>
                <h3>24/7</h3>
                <p>Accessibility</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy - Three Column */}
      <section className="philosophy-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Philosophy</h2>
          </div>
          <div className="philosophy-grid">
            <div className="phi-card">
              <span className="phi-num">01</span>
              <h4>Radical Transparency</h4>
              <p>No fine print. No hidden costs. We talk to our users like we talk to our friends.</p>
            </div>
            <div className="phi-card">
              <span className="phi-num">02</span>
              <h4>Technology First</h4>
              <p>We use proprietary AI models to look beyond credit scores and see real potential.</p>
            </div>
            <div className="phi-card">
              <span className="phi-num">03</span>
              <h4>User Obsession</h4>
              <p>Our products aren't built in boardrooms; they are built from user feedback loops.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;