import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Column 1: Brand Info */}
        <div className="footer-column brand-col">
          <h2 className="footer-logo">Ask Me <span>Credit</span></h2>
          <p className="footer-desc">
            Empowering your financial journey with smart, transparent, and instant credit solutions tailored for your lifestyle.
          </p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">LN</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Our Products</h4>
          <ul>
            <li><a href="#">Personal Loan</a></li>
            <li><a href="#">Business Loan</a></li>
            <li><a href="#">Home Loan</a></li>
            <li><a href="#">Gold Loan</a></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Culture</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-column">
          <h4>Get in Touch</h4>
          <ul className="footer-contact">
            <li>📧 support@askmecredit.com</li>
            <li>📞 +91 12345 67890</li>
            <li>📍 Mumbai, Maharashtra, India</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {currentYear} Ask Me Credit. All Rights Reserved.</p>
          <div className="footer-legal">
            <p>Made with ❤️ in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;