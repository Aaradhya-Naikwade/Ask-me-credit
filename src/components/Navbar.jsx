import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Link,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);

  const location = useLocation();
  const navigationType = useNavigationType();

  const shouldAnimate =
    location.pathname === "/" && navigationType === "POP";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Loans", path: "#", dropdown: true },
    { name: "EMI Calculator", path: "/emi-calculator" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const loanLinks = [
    { name: "Personal Loan", path: "/loans/personal" },
    { name: "Home Loan", path: "/loans/home" },
    { name: "Business Loan", path: "/loans/business" },
    { name: "Education Loan", path: "/loans/education" },
    { name: "Vehicle Loan", path: "/loans/vehicle" },
  ];

  return (
    <>
      <motion.nav
        className="navbar"
        initial={shouldAnimate ? { y: -40, opacity: 0 } : false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container navbar-inner">
          {/* LEFT */}
          <Link to="/" className="navbar-left">
            <svg
              className="wallet-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="2" y="6" width="20" height="14" rx="2" />
              <path d="M16 12h4" />
            </svg>
            <span className="brand">Ask Me Credit</span>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="navbar-center desktop-only">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li
                  key={link.name}
                  className={`nav-item dropdown ${
                    location.pathname.startsWith("/loans") ? "active" : ""
                  }`}
                  onMouseEnter={() => setLoanOpen(true)}
                  onMouseLeave={() => setLoanOpen(false)}
                >
                  <span className="nav-dropdown">
                    {link.name}
                    <FiChevronDown
                      className={`chevron ${
                        loanOpen ? "rotate" : ""
                      }`}
                    />
                  </span>

                  <AnimatePresence>
                    {loanOpen && (
                      <motion.div
                        className="dropdown-menu"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                      >
                        {loanLinks.map((loan) => (
                          <Link
                            key={loan.name}
                            to={loan.path}
                            className="dropdown-link"
                            onClick={() => setLoanOpen(false)}
                          >
                            {loan.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li
                  key={link.name}
                  className={`nav-item ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              )
            )}
          </ul>

          {/* DESKTOP CTA */}
          <Link to="/apply" className="cta-btn desktop-only">
            Apply for Loan
          </Link>

          {/* MOBILE MENU BUTTON */}
          <div
            className="menu-toggle mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <div
                      className="mobile-link mobile-dropdown"
                      onClick={() => setLoanOpen(!loanOpen)}
                    >
                      Loans
                      <FiChevronDown
                        className={`chevron ${
                          loanOpen ? "rotate" : ""
                        }`}
                      />
                    </div>

                    <AnimatePresence>
                      {loanOpen && (
                        <motion.div
                          className="mobile-submenu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          {loanLinks.map((loan) => (
                            <Link
                              key={loan.name}
                              to={loan.path}
                              className="mobile-sublink"
                              onClick={() => {
                                setMenuOpen(false);
                                setLoanOpen(false);
                              }}
                            >
                              {loan.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="mobile-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* MOBILE CTA */}
      <div className="mobile-cta">
        <Link to="/apply" className="cta-btn full-width">
          Apply for Loan
        </Link>
      </div>
    </>
  );
};

export default Navbar;

