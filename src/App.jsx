import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EmiCalculator from "./pages/EmiCalculator";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const Placeholder = ({ title }) => (
  <div className="container" style={{ paddingTop: "140px" }}>
    <h1>{title}</h1>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/emi-calculator" element={<EmiCalculator/>} />
        <Route path="/apply" element={<Placeholder title="Apply for Loan" />} />

        {/* Loan pages */}
        <Route path="/loans/personal" element={<Placeholder title="Personal Loan" />} />
        <Route path="/loans/home" element={<Placeholder title="Home Loan" />} />
        <Route path="/loans/business" element={<Placeholder title="Business Loan" />} />
        <Route path="/loans/education" element={<Placeholder title="Education Loan" />} />
        <Route path="/loans/vehicle" element={<Placeholder title="Vehicle Loan" />} />
      </Routes>
    </>
  );
}

export default App;
