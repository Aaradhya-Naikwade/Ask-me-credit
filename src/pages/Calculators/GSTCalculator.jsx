import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StatsSection from "../../components/StatsSection";
import "./Calculators.css";

const GstCalculator = () => {
  const [amount, setAmount] = useState(10000);
  const [gstRate, setGstRate] = useState(18);
  const [type, setType] = useState("exclusive"); // exclusive | inclusive

  const [gstAmount, setGstAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [baseAmount, setBaseAmount] = useState(0);

  useEffect(() => {
    if (type === "exclusive") {
      const gst = (amount * gstRate) / 100;
      setGstAmount(Math.round(gst));
      setTotalAmount(Math.round(amount + gst));
      setBaseAmount(amount);
    } else {
      const base = (amount * 100) / (100 + gstRate);
      const gst = amount - base;
      setBaseAmount(Math.round(base));
      setGstAmount(Math.round(gst));
      setTotalAmount(amount);
    }
  }, [amount, gstRate, type]);

  const amountFill = ((amount - 100) / (1000000 - 100)) * 100;
  const rateFill = (gstRate / 28) * 100;

  return (
    <div className="page-wrapper">
      <Navbar />

      {/* HEADER */}
      <section className="emi-header">
        <div className="container">
          {/* <span className="section-pill">Tax Tools</span> */}
          <h1>GST <span>Calculator</span></h1>
          <p>
            Quickly calculate GST amount, total value, and base price for
            inclusive or exclusive GST.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="emi-container">
        <div className="emi-content-grid container">

          {/* LEFT INFO */}
          <div className="emi-info-side">
            <h2>Calculate GST accurately</h2>
            <p>
              Use this GST calculator to find GST amount, base value,
              and final price for any product or service.
            </p>

            <div className="value-props">
              <div className="prop">
                <div className="prop-dot"></div>
                <div>
                  <strong>Inclusive & Exclusive</strong>
                  <p>Supports both GST calculation types.</p>
                </div>
              </div>

              <div className="prop">
                <div className="prop-dot"></div>
                <div>
                  <strong>Instant Results</strong>
                  <p>Live calculation with every change.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="emi-card-side">
            <div className="modern-calc">
              <div className="calc-body">

                {/* GST TYPE */}
                <div className="slider-box">
                  {/* <label>GST Type</label> */}
                  <div className="gst-toggle">
                    <button
                      className={type === "exclusive" ? "active" : ""}
                      onClick={() => setType("exclusive")}
                    >
                      Exclusive
                    </button>
                    <button
                      className={type === "inclusive" ? "active" : ""}
                      onClick={() => setType("inclusive")}
                    >
                      Inclusive
                    </button>
                  </div>
                </div>

                {/* AMOUNT */}
                <div className="slider-box">
                  <div className="label-row">
                    <label>Amount (₹)</label>
                    <span className="value-display">
                      ₹{amount.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="1000000"
                    step="100"
                    value={amount}
                    style={{ backgroundSize: `${amountFill}% 100%` }}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>

                {/* GST RATE */}
                <div className="slider-box">
                  <div className="label-row">
                    <label>GST Rate (%)</label>
                    <span className="value-display">{gstRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="28"
                    step="1"
                    value={gstRate}
                    style={{ backgroundSize: `${rateFill}% 100%` }}
                    onChange={(e) => setGstRate(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* RESULTS */}
              <div className="calc-footer">
                <div className="gst-results">
                  <div>
                    <span className="res-label">Base Amount</span>
                    <h3>₹{baseAmount.toLocaleString()}</h3>
                  </div>
                  <div>
                    <span className="res-label">GST Amount</span>
                    <h3>₹{gstAmount.toLocaleString()}</h3>
                  </div>
                </div>

                <div className="total-box">
                  <span className="res-label">Total Amount</span>
                  <h2 className="res-value">
                    ₹{totalAmount.toLocaleString()}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <Footer />
    </div>
  );
};

export default GstCalculator;
