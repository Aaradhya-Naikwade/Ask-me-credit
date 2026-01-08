// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
// import "../components/styles/Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   // Close mobile menu on route change
//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location]);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "auto";
//     return () => (document.body.style.overflow = "auto");
//   }, [menuOpen]);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Loans", path: "/loans" },         
//     { name: "Calculators", path: "/calculators" },
//     { name: "About Us", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="navbar">
//       {/* MAIN BAR */}
//       <div className="navbar-inner">
//         {/* LOGO */}
//         <Link to="/" className="navbar-left">
//           <div className="logo-box">
//             <svg className="wallet-icon" viewBox="0 0 24 24" fill="none">
//               <rect x="2" y="6" width="20" height="14" rx="2" />
//               <path d="M16 12h4" />
//             </svg>
//           </div>
//           <span className="brand">
//             Ask Me <span className="brand-accent">Credit</span>
//           </span>
//         </Link>

//         {/* DESKTOP NAV */}
//         <ul className="navbar-center desktop-only">
//           {navLinks.map((link) => (
//             <li
//               key={link.name}
//               className={`nav-item ${
//                 location.pathname === link.path ? "active" : ""
//               }`}
//             >
//               <Link to={link.path}>{link.name}</Link>
//             </li>
//           ))}
//         </ul>

//         {/* DESKTOP CTA */}
//         <Link to="/apply" className="cta-premium desktop-only">
//           Apply Now
//         </Link>
//       </div>

//       {/* MOBILE TOGGLE */}
//       <button
//         className="menu-toggle mobile-only"
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle Menu"
//       >
//         {menuOpen ? <FiX /> : <FiMenu />}
//       </button>

//       {/* MOBILE OVERLAY */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             className="mobile-overlay"
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 260, damping: 25 }}
//           >
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className="mobile-link"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             <Link to="/apply" className="cta-premium full-width">
//               Start Application
//             </Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;







import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../components/styles/Navbar.css";
import logo from "../assets/ask-me-credit.png"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Loans", path: "/loans" },
    { name: "Calculators", path: "/calculators" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        
        {/* LOGO */}
        <Link to="/" className="navbar-left">
          <img src={logo} alt="Ask Me Credit" className="navbar-logo" />
          <span className="brand">
            Ask Me <span className="brand-accent">Credit</span>
          </span>
        </Link>

        {/* RIGHT NAV */}
        <div className="navbar-right desktop-only">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`nav-item ${
                  location.pathname === link.path ? "active" : ""
                }`}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <Link to="/apply" className="cta-premium">
            Apply Now
          </Link>
        </div>
      </div>

      {/* MOBILE TOGGLE */}
      <button
        className="menu-toggle mobile-only"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
          >
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="mobile-link">
                {link.name}
              </Link>
            ))}

            <Link to="/apply" className="cta-premium full-width">
              Start Application
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
