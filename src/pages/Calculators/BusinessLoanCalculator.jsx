import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StatsSection from "../../components/StatsSection";
import "./Calculators.css";

const BusinessLoanCalculator = () => {
    // 🔹 Business loan defaults
    const [amount, setAmount] = useState(1000000); // 10 Lakhs
    const [rate, setRate] = useState(14);
    const [tenure, setTenure] = useState(36); // 3 Years
    const [emi, setEmi] = useState(0);
    const [schedule, setSchedule] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

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

    // 🔹 Slider fill calculations
    const amountFill = ((amount - 100000) / (20000000 - 100000)) * 100;
    const rateFill = ((rate - 10) / (30 - 10)) * 100;
    const tenureFill = ((tenure - 12) / (120 - 12)) * 100;

    const visibleSchedule = isExpanded ? schedule : schedule.slice(0, 5);

    const faqs = [
        {
            q: "What is a Business Loan EMI?",
            a: "A Business Loan EMI is the fixed monthly amount paid towards repayment of your business loan, including principal and interest.",
        },
        {
            q: "What can I use a business loan for?",
            a: "Business loans can be used for expansion, working capital, equipment purchase, inventory, or managing cash flow.",
        },
        {
            q: "Can I prepay my business loan?",
            a: "Yes, most lenders allow prepayment or foreclosure, though charges may apply depending on the lender.",
        },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* HEADER */}
            <section className="emi-header">
                <div className="container">
                    {/* <span className="section-pill">Business Finance Tools</span> */}
                    <h1>Business Loan <span>Calculator</span></h1>
                    <p>
                        Estimate your business loan EMI and plan your cash flow
                        efficiently.
                    </p>
                </div>
            </section>

            {/* MAIN SECTION */}
            <section className="emi-container">
                <div className="emi-content-grid container">

                    {/* LEFT CONTENT */}
                    <div className="emi-info-side">
                        <h2>Fuel your business growth</h2>
                        <p>
                            Calculate EMIs, interest outflow, and repayment
                            schedule to make informed financial decisions for
                            your business.
                        </p>

                        <div className="value-props">
                            <div className="prop">
                                <div className="prop-dot"></div>
                                <div>
                                    <strong>Quick Planning</strong>
                                    <p>Instant EMI results for better budgeting.</p>
                                </div>
                            </div>

                            <div className="prop">
                                <div className="prop-dot"></div>
                                <div>
                                    <strong>Flexible Tenure</strong>
                                    <p>Choose tenure that matches business cash flow.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CALCULATOR */}
                    <div className="emi-card-side">
                        <div className="modern-calc">
                            <div className="calc-body">

                                <div className="slider-box">
                                    <div className="label-row">
                                        <label>Business Loan Amount</label>
                                        <span className="value-display">
                                            ₹{amount.toLocaleString()}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="100000"
                                        max="20000000"
                                        step="100000"
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
                                        min="10"
                                        max="30"
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
                                        max="120"
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
                                    Apply for Business Loan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* REPAYMENT SCHEDULE */}
                <div className="demo">
                    <div className="container schedule-section">
                        <h2 className="schedule-main-title">
                            Business Loan <span>Repayment Schedule</span>
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
                            <button
                                className="view-more-btn"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                {isExpanded ? "View Less" : "View More"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq-section container">
                <div className="faq-header">
                    <h2>Business Loan <span>FAQs</span></h2>
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

export default BusinessLoanCalculator;
