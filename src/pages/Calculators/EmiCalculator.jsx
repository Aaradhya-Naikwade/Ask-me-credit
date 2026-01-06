import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StatsSection from "../../components/StatsSection";
import "./Calculators.css";

const EmiCalculator = () => {
    const [amount, setAmount] = useState(500000);
    const [rate, setRate] = useState(10.5);
    const [tenure, setTenure] = useState(24);
    const [emi, setEmi] = useState(0);
    const [schedule, setSchedule] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

    useEffect(() => {
        const r = rate / 12 / 100;
        const n = tenure;
        const emiCalc = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const monthlyEmi = Math.round(emiCalc);
        setEmi(monthlyEmi);

        let currentBalance = amount;
        const newSchedule = [];
        for (let i = 1; i <= n; i++) {
            const interest = Math.round(currentBalance * r);
            const principal = monthlyEmi - interest;
            currentBalance = currentBalance - principal;
            newSchedule.push({
                month: i,
                principal: principal,
                interest: interest,
                balance: Math.max(0, currentBalance),
            });
        }
        setSchedule(newSchedule);
    }, [amount, rate, tenure]);

    const amountFill = ((amount - 50000) / (5000000 - 50000)) * 100;
    const rateFill = ((rate - 8) / (24 - 8)) * 100;
    const tenureFill = ((tenure - 12) / (60 - 12)) * 100;

    // Logic to show 5 rows or all
    const visibleSchedule = isExpanded ? schedule : schedule.slice(0, 5);

    const faqs = [
        { q: "What is an EMI?", a: "EMI stands for Equated Monthly Installment. It is a fixed amount paid every month toward your loan." },
        { q: "How is interest calculated?", a: "It is calculated on a reducing balance basis, meaning interest is charged on the outstanding principal each month." },
        { q: "Can I pay off my loan early?", a: "Most lenders allow 'Foreclosure' or 'Pre-payment', though some may charge a small fee." }
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            <section className="emi-header">
                <div className="container">
                    {/* <span className="section-pill">Planning Tools</span> */}
                    <h1>EMI <span>Calculator</span></h1>
                    <p>Adjust the sliders to see your monthly breakdown instantly.</p>
                </div>
            </section>

            <section className="emi-container">
                <div className="emi-content-grid container">
                    {/* LEFT SIDE - TEXT CONTENT */}
                    <div className="emi-info-side">
                        <h2>Plan your loan with confidence</h2>
                        <p>Our EMI calculator gives you a clear idea of monthly repayments before you apply.</p>
                        <div className="value-props">
                            <div className="prop">
                                <div className="prop-dot"></div>
                                <div><strong>Real-time EMI</strong><p>Instant calculation with every movement.</p></div>
                            </div>
                            <div className="prop">
                                <div className="prop-dot"></div>
                                <div><strong>No Hidden Charges</strong><p>Clear principal and interest split.</p></div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - CALCULATOR CARD */}
                    <div className="emi-card-side">
                        <div className="modern-calc">
                            <div className="calc-body">
                                <div className="slider-box">
                                    <div className="label-row">
                                        <label>Loan Amount</label>
                                        <span className="value-display">₹{amount.toLocaleString()}</span>
                                    </div>
                                    <input type="range" min="50000" max="5000000" step="50000" value={amount} style={{ backgroundSize: `${amountFill}% 100%` }} onChange={(e) => setAmount(Number(e.target.value))} />
                                </div>
                                <div className="slider-box">
                                    <div className="label-row">
                                        <label>Interest Rate (%)</label>
                                        <span className="value-display">{rate}%</span>
                                    </div>
                                    <input type="range" min="8" max="24" step="0.5" value={rate} style={{ backgroundSize: `${rateFill}% 100%` }} onChange={(e) => setRate(Number(e.target.value))} />
                                </div>
                                <div className="slider-box">
                                    <div className="label-row">
                                        <label>Tenure (Months)</label>
                                        <span className="value-display">{tenure} Months</span>
                                    </div>
                                    <input type="range" min="12" max="60" step="6" value={tenure} style={{ backgroundSize: `${tenureFill}% 100%` }} onChange={(e) => setTenure(Number(e.target.value))} />
                                </div>
                            </div>
                            <div className="calc-footer">
                                <span className="res-label">Monthly EMI</span>
                                <h2 className="res-value">₹{emi.toLocaleString()}</h2>
                                <button className="cta-btn-primary">Apply for Loan</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Repayment Schedule */}
                <div className="demo">
                    <div className="container schedule-section">
                        <h2 className="schedule-main-title">Check <span>Repayment Schedule</span></h2>

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
                                    {visibleSchedule.map((row) => (
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
                            <button className="view-more-btn" onClick={() => setIsExpanded(!isExpanded)}>
                                {isExpanded ? "View Less" : "View More"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="faq-section container">
                <div className="faq-header">
                    <h2>Frequently Asked <span>Questions</span></h2>
                </div>
                <div className="faq-accordion">
                    {faqs.map((f, i) => (
                        <div key={i} className={`faq-card ${activeFaq === i ? "active" : ""}`}>
                            <button className="faq-question" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                                <span>{f.q}</span>
                                <span className="arrow-icon">▼</span>
                            </button>
                            <AnimatePresence>
                                {activeFaq === i && (
                                    <motion.div className="faq-answer" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}>
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

export default EmiCalculator;