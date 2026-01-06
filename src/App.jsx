import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EmiCalculator from "./pages/Calculators/EmiCalculator";
import PersonalCalculator from "./pages/Calculators/PersonalCalculator"
import HomeLoanCalculator from "./pages/Calculators/HomeLoanCalculator"
import BusinessLoanCalculator from "./pages/Calculators/BusinessLoanCalculator"
import CarLoanCalculator from "./pages/Calculators/CarLoanCalculator"
import TwoWheelerLoanCalculator from "./pages/Calculators/TwoWheelerLoanCalculator"
import CommercialVehicleLoanCalculator from "./pages/Calculators/CommercialVehicleLoanCalculator"


import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Calculators from "./pages/Calculators"

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
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/emi-calculator" element={<EmiCalculator />} />
        <Route path="/personal-loan-calculator" element={<PersonalCalculator />} />
        <Route path="/home-loan-calculator" element={<HomeLoanCalculator />} />
        <Route path="/business-loan-calculator" element={<BusinessLoanCalculator />} />
        <Route path="/car-loan-calculator" element={<CarLoanCalculator />} />
        <Route path="/two-wheeler-loan-calculator" element={<TwoWheelerLoanCalculator />} />
        <Route path="/commercial-vehicle-loan-calculator" element={<CommercialVehicleLoanCalculator />} />

        <Route path="/calculators" element={<Calculators />} />
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
