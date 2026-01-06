import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StatsSection from "../../components/StatsSection";
import "./Calculators.css";

const TwoWheelerLoanCalculator = () => {
  const [amount, setAmount] = useState(120000); // ₹1.2 Lakh
  const [rate, setRate] = useState(11);
  const [tenure, setTenure] = useState(36); // 3 Years
  const [emi, setEmi] = useState(0);
  const [schedule, setSchedule] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  /* ================= EMI LOGIC ================= */
  useEffect(() => {
    const r = rate / 12 / 100;
    const n = tenure;

    const emiCalc =
      (amount * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    const monthlyEmi = Math.round(emiCalc);
    setEmi(monthlyEmi);

    let balance = amount;
    const rows = [];

    for (let i = 1; i <= n; i++) {
      const interest = Math.round(balance * r);
      const principal = monthlyEmi - interest;
      balance -= principal;

      rows.push({
        month: i,
        principal,
        interest,
        balance: Math.max(0, balance),
      });
    }
    setSchedule(rows);
  }, [amount, rate, tenure]);

  const amountFill = ((amount - 30000) / (300000 - 30000)) * 100;
  const rateFill = ((rate - 8) / (18 - 8)) * 100;
  const tenureFill = ((tenure - 12) / (60 - 12)) * 100;

  const visibleRows = expanded ? schedule : schedule.slice(0, 5);

  const faqs = [
    {
      q: "What is a Two-Wheeler Loan EMI?",
      a: "Two-wheeler loan EMI is the fixed monthly amount paid towards your bike loan, including principal and interest.",
    },
    {
      q: "Can I get a loan for electric bikes?",
      a: "Yes, many lenders offer loans for electric scooters and bikes, often at competitive interest rates.",
    },
    {
      q: "Is prepayment allowed on bike loans?",
      a: "Yes, most lenders allow prepayment or foreclosure, sometimes with minimal charges.",
    },
  ];

  return (
    <div className="page-wrapper">
      <Navbar />

      {/* HEADER */}
      <section className="emi-header">
        <div className="container">
          {/* <span className="section-pill">Vehicle Loan Tools</span> */}
          <h1>Two-Wheeler Loan <span>Calculator</span></h1>
          <p>
            Calculate your bike loan EMI instantly and plan your purchase wisely.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="emi-container">
        <div className="emi-content-grid container">

          {/* LEFT INFO */}
          <div className="emi-info-side">
            <h2>Ride your bike with confidence</h2>
            <p>
              Estimate monthly EMIs, interest cost, and repayment schedule
              before applying for a two-wheeler loan.
            </p>

            <div className="value-props">
              <div className="prop">
                <div className="prop-dot"></div>
                <div>
                  <strong>Instant EMI Calculation</strong>
                  <p>Real-time updates as you adjust values.</p>
                </div>
              </div>

              <div className="prop">
                <div className="prop-dot"></div>
                <div>
                  <strong>Shorter Tenure</strong>
                  <p>Repay your bike loan faster.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="emi-card-side">
            <div className="modern-calc">
              <div className="calc-body">

                <div className="slider-box">
                  <div className="label-row">
                    <label>Two-Wheeler Loan Amount</label>
                    <span className="value-display">
                      ₹{amount.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30000"
                    max="300000"
                    step="5000"
                    value={amount}
                    style={{ backgroundSize: `${amountFill}% 100%` }}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>

                <div className="slider-box">
                  <div className="label-row">
                    <label>Interest Rate (%)</label>
                    <span className="value-display">{rate}%</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="18"
                    step="0.5"
                    value={rate}
                    style={{ backgroundSize: `${rateFill}% 100%` }}
                    onChange={(e) => setRate(Number(e.target.value))}
                  />
                </div>

                <div className="slider-box">
                  <div className="label-row">
                    <label>Loan Tenure</label>
                    <span className="value-display">
                      {tenure} Months
                    </span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="60"
                    step="6"
                    value={tenure}
                    style={{ backgroundSize: `${tenureFill}% 100%` }}
                    onChange={(e) => setTenure(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="calc-footer">
                <span className="res-label">Monthly EMI</span>
                <h2 className="res-value">
                  ₹{emi.toLocaleString()}
                </h2>
                <button className="cta-btn-primary">
                  Apply for Two-Wheeler Loan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* REPAYMENT TABLE */}
        <div className="demo">
          <div className="container schedule-section">
            <h2 className="schedule-main-title">
              Two-Wheeler Loan <span>Repayment Schedule</span>
            </h2>

            <div className="table-responsive">
              <table className="amort-table">
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Principal</th>
                    <th>Interest</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleRows.map((row) => (
                    <tr key={row.month}>
                      <td>{row.month}</td>
                      <td>₹{row.principal.toLocaleString()}</td>
                      <td>₹{row.interest.toLocaleString()}</td>
                      <td>₹{row.balance.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="center-btn-box">
              <button
                className="view-more-btn"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "View Less" : "View More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section container">
        <div className="faq-header">
          <h2>Two-Wheeler Loan <span>FAQs</span></h2>
        </div>

        <div className="faq-accordion">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`faq-card ${activeFaq === i ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setActiveFaq(activeFaq === i ? null : i)
                }
              >
                <span>{f.q}</span>
                <span className="arrow-icon">▼</span>
              </button>

              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <StatsSection />
      <Footer />
    </div>
  );
};

export default TwoWheelerLoanCalculator;
