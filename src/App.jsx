
// import { Routes, Route, useLocation } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import Loans from "./pages/Loans";
// import AboutUs from "./pages/AboutUs";
// import Contact from "./pages/Contact";
// import Calculators from "./pages/Calculators";
// import Apply from "./pages/ApplyNow"
// import TermsAndCo from "./pages/TermsAndCo"
// import PrivacyPolicy from "./pages/PrivacyPolicy";

// /* CALCULATORS */
// import EmiCalculator from "./pages/Calculators/EmiCalculator";
// import PersonalCalculator from "./pages/Calculators/PersonalCalculator";
// import HomeLoanCalculator from "./pages/Calculators/HomeLoanCalculator";
// import BusinessLoanCalculator from "./pages/Calculators/BusinessLoanCalculator";
// import CarLoanCalculator from "./pages/Calculators/CarLoanCalculator";
// import TwoWheelerLoanCalculator from "./pages/Calculators/TwoWheelerLoanCalculator";
// import CommercialVehicleLoanCalculator from "./pages/Calculators/CommercialVehicleLoanCalculator";
// import GSTCalculator from "./pages/Calculators/GSTCalculator";

// /* LOANS */
// import PersonalLoan from "./pages/Loans/PersonalLoan";
// import HomeLoan from "./pages/Loans/HomeLoan";
// import GoldLoan from "./pages/Loans/GoldLoan";
// import EducationLoan from "./pages/Loans/EducationLoan";
// import BusinessLoan from "./pages/Loans/BusinessLoan";
// import CarLoan from "./pages/Loans/CarLoan";
// import TwoWheelerLoan from "./pages/Loans/TwoWheelerLoan";
// import CommercialVehicleLoan from "./pages/Loans/CommercialVehicleLoan";
// import WorkingCapitalLoan from "./pages/Loans/WorkingCapitalLoan";
// import LoanAgainstProperty from "./pages/Loans/LoanAgainstProperty";
// import OverdraftFacility from "./pages/Loans/OverdraftFacility";

// /* ADMIN */
// import AdminLogin from "./admin/AdminLogin";
// import AdminDashboard from "./admin/AdminDashboard";
// import AdminRoute from "./routes/AdminRoute";

// const Placeholder = ({ title }) => (
//   <div className="container" style={{ paddingTop: "140px" }}>
//     <h1>{title}</h1>
//   </div>
// );

// function App() {
//   const location = useLocation();

//   // Hide Navbar on admin pages
//   const hideNavbar = location.pathname.startsWith("/admin");

//   return (
//     <>
//       <ScrollToTop />
//       {!hideNavbar && <Navbar />}

//       <Routes>
//         {/* PUBLIC ROUTES */}
//         <Route path="/" element={<Home />} />
//         <Route path="/loans" element={<Loans />} />
//         <Route path="/calculators" element={<Calculators />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/apply" element={<Apply />} />
//         <Route path="/terms" element={<TermsAndCo />} />
//         <Route path="/privacy" element={<PrivacyPolicy />} />



//         {/* CALCULATORS */}
//         <Route path="/emi-calculator" element={<EmiCalculator />} />
//         <Route path="/personal-loan-calculator" element={<PersonalCalculator />} />
//         <Route path="/home-loan-calculator" element={<HomeLoanCalculator />} />
//         <Route path="/business-loan-calculator" element={<BusinessLoanCalculator />} />
//         <Route path="/car-loan-calculator" element={<CarLoanCalculator />} />
//         <Route path="/two-wheeler-loan-calculator" element={<TwoWheelerLoanCalculator />} />
//         <Route path="/commercial-vehicle-loan-calculator" element={<CommercialVehicleLoanCalculator />} />
//         <Route path="/gst-calculator" element={<GSTCalculator />} />

//         {/* LOAN PAGES */}
//         <Route path="/loans/personal" element={<PersonalLoan />} />
//         <Route path="/loans/home" element={<HomeLoan />} />
//         <Route path="/loans/gold" element={<GoldLoan />} />
//         <Route path="/loans/business" element={<BusinessLoan />} />
//         <Route path="/loans/education" element={<EducationLoan />} />
//         <Route path="/loans/car" element={<CarLoan />} />
//         <Route path="/loans/two-wheeler" element={<TwoWheelerLoan />} />
//         <Route path="/loans/commercial-vehicle" element={<CommercialVehicleLoan />} />
//         <Route path="/loans/working-capital" element={<WorkingCapitalLoan />} />
//         <Route path="/loans/lap" element={<LoanAgainstProperty />} />
//         <Route path="/loans/overdraft" element={<OverdraftFacility />} />



//         {/* ADMIN ROUTES */}
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route
//           path="/admin"
//           element={
//             <AdminRoute>
//               <AdminDashboard />
//             </AdminRoute>
//           }
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;









import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";

/* ADMIN */
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminProtectedRoute from "./components/AdminProtectedRoute";

/* PAGES */
import Home from "./pages/Home";
import Loans from "./pages/Loans";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Calculators from "./pages/Calculators";
import Apply from "./pages/ApplyNow";
import TermsAndCo from "./pages/TermsAndCo";
import PrivacyPolicy from "./pages/PrivacyPolicy";

/* CALCULATORS */
import EmiCalculator from "./pages/Calculators/EmiCalculator";
import PersonalCalculator from "./pages/Calculators/PersonalCalculator";
import HomeLoanCalculator from "./pages/Calculators/HomeLoanCalculator";
import BusinessLoanCalculator from "./pages/Calculators/BusinessLoanCalculator";
import CarLoanCalculator from "./pages/Calculators/CarLoanCalculator";
import TwoWheelerLoanCalculator from "./pages/Calculators/TwoWheelerLoanCalculator";
import CommercialVehicleLoanCalculator from "./pages/Calculators/CommercialVehicleLoanCalculator";
import GSTCalculator from "./pages/Calculators/GSTCalculator";

/* LOANS */
import PersonalLoan from "./pages/Loans/PersonalLoan";
import HomeLoan from "./pages/Loans/HomeLoan";
import GoldLoan from "./pages/Loans/GoldLoan";
import EducationLoan from "./pages/Loans/EducationLoan";
import BusinessLoan from "./pages/Loans/BusinessLoan";
import CarLoan from "./pages/Loans/CarLoan";
import TwoWheelerLoan from "./pages/Loans/TwoWheelerLoan";
import CommercialVehicleLoan from "./pages/Loans/CommercialVehicleLoan";
import WorkingCapitalLoan from "./pages/Loans/WorkingCapitalLoan";
import LoanAgainstProperty from "./pages/Loans/LoanAgainstProperty";
import OverdraftFacility from "./pages/Loans/OverdraftFacility";

function App() {
  const location = useLocation();

  // Hide Navbar on admin pages
  const hideNavbar = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />
      {!hideNavbar && <Navbar />}

      <Routes>

        {/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />

        {/* Redirect /admin → /admin/login */}
        <Route
          path="/admin"
          element={<Navigate to="/admin/login" replace />}
        />

        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/terms" element={<TermsAndCo />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* ================= CALCULATORS ================= */}
        <Route path="/emi-calculator" element={<EmiCalculator />} />
        <Route path="/personal-loan-calculator" element={<PersonalCalculator />} />
        <Route path="/home-loan-calculator" element={<HomeLoanCalculator />} />
        <Route path="/business-loan-calculator" element={<BusinessLoanCalculator />} />
        <Route path="/car-loan-calculator" element={<CarLoanCalculator />} />
        <Route path="/two-wheeler-loan-calculator" element={<TwoWheelerLoanCalculator />} />
        <Route path="/commercial-vehicle-loan-calculator" element={<CommercialVehicleLoanCalculator />} />
        <Route path="/gst-calculator" element={<GSTCalculator />} />

        {/* ================= LOAN PAGES ================= */}
        <Route path="/loans/personal" element={<PersonalLoan />} />
        <Route path="/loans/home" element={<HomeLoan />} />
        <Route path="/loans/gold" element={<GoldLoan />} />
        <Route path="/loans/education" element={<EducationLoan />} />
        <Route path="/loans/business" element={<BusinessLoan />} />
        <Route path="/loans/car" element={<CarLoan />} />
        <Route path="/loans/two-wheeler" element={<TwoWheelerLoan />} />
        <Route path="/loans/commercial-vehicle" element={<CommercialVehicleLoan />} />
        <Route path="/loans/working-capital" element={<WorkingCapitalLoan />} />
        <Route path="/loans/lap" element={<LoanAgainstProperty />} />
        <Route path="/loans/overdraft" element={<OverdraftFacility />} />

      </Routes>
    </>
  );
}

export default App;
