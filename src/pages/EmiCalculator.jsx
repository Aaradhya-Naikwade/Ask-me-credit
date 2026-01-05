import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import "./EmiCalculator.css";

const EmiCalculator = () => {
    const [amount, setAmount] = useState(500000);
    const [rate, setRate] = useState(10.5);
    const [tenure, setTenure] = useState(24);
    const [emi, setEmi] = useState(0);

    useEffect(() => {
        const r = rate / 12 / 100;
        const n = tenure;
        const emiCalc = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setEmi(Math.round(emiCalc));
    }, [amount, rate, tenure]);

    return (
        <div className="page-wrapper">
            <Navbar />
            <section className="emi-container">
                <div className="emi-content-grid container">

                    {/* Left: Strategic Content */}
                    <motion.div
                        className="emi-info-side"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="kicker">Smart Financial Tools</div>
                        <h1>EMI<br /><span>Calculator</span></h1>
                        <p>
                            Use our smart EMI calculator to plan your loan better. Choose your amount, interest, and tenure — get your EMI instantly.
                        </p>

                        <div className="value-props">
                            <div className="prop">
                                <div className="prop-dot"></div>
                                <div>
                                    <strong>Transparent Estimates</strong>
                                    <p>Real-time calculation based on market-standard APR models.</p>
                                </div>
                            </div>
                            <div className="prop">
                                <div className="prop-dot"></div>
                                <div>
                                    <strong>Zero Hidden Costs</strong>
                                    <p>Understand your principal and interest split instantly.</p>
                                </div>
                            </div>
                            <div className="prop">
                                <div className="prop-dot"></div>
                                <div>
                                    <strong>Easy to Apply</strong>
                                    <p>Apply directly for the loan from calculator.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Premium Calculator Card */}
                    <motion.div
                        className="emi-card-side"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="modern-calc">


                            <div className="calc-body">
                                <div className="slider-box">
                                    <div className="label-row">
                                        <label>Loan Amount</label>
                                        <span className="value-display">₹{amount.toLocaleString()}</span>
                                    </div>
                                    <input type="range" min="50000" max="5000000" step="50000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                                </div>

                                <div className="slider-box">
                                    <div className="label-row">
                                        <label>Interest Rate (% P.A.)</label>
                                        <span className="value-display">{rate}%</span>
                                    </div>
                                    <input type="range" min="8" max="24" step="0.5" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
                                </div>

                                <div className="slider-box">
                                    <div className="label-row">
                                        <label>Tenure (Months)</label>
                                        <span className="value-display">{tenure} Months</span>
                                    </div>
                                    <input type="range" min="12" max="60" step="6" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} />
                                </div>
                            </div>

                            <div className="calc-footer">
                                <div className="result-display">
                                    <span className="res-label">Estimated Monthly EMI</span>
                                    <h2 className="res-value">₹{emi.toLocaleString()}</h2>
                                </div>
                                <button className="cta-btn-primary">Apply for this Loan</button>
                                <p className="disclaimer">
                                    *This is an estimate. Actual EMI may vary based on lender terms.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <StatsSection />
            <Footer />
        </div>
    );
};

export default EmiCalculator;