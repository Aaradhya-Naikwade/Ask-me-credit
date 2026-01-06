import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StatsSection from "../../components/StatsSection";
import "./Calculators.css";

const HomeLoanCalculator = () => {
    // Updated defaults for Home Loan
    const [amount, setAmount] = useState(3000000); // 30 Lakhs
    const [rate, setRate] = useState(8.5);
    const [tenure, setTenure] = useState(240); // 20 Years
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

    // 🔹 Updated slider ranges
    const amountFill = ((amount - 500000) / (50000000 - 500000)) * 100;
    const rateFill = ((rate - 7) / (11 - 7)) * 100;
    const tenureFill = ((tenure - 60) / (360 - 60)) * 100;

    const visibleSchedule = isExpanded ? schedule : schedule.slice(0, 5);

    const faqs = [
        {
            q: "What is a Home Loan EMI?",
            a: "A Home Loan EMI is a fixed monthly payment made towards repayment of the home loan, consisting of principal and interest.",
        },
        {
            q: "What is the maximum tenure for a home loan?",
            a: "Home loans typically offer long tenures up to 30 years, helping reduce monthly EMI burden.",
        },
        {
            q: "Can I prepay my home loan?",
            a: "Yes, most banks allow part-prepayment or foreclosure of home loans, often without charges for floating-rate loans.",
        },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />

            {/* HEADER */}
            <section className="emi-header">
                <div className="container">
                    {/* <span className="section-pill">Property Loan Tools</span> */}
                    <h1>Home Loan <span>Calculator</span></h1>
                    <p>
                        Calculate your home loan EMI and plan long-term finances
                        with clarity.
                    </p>
                </div>
            </section>

            {/* CALCULATOR */}
            <section className="emi-container">
                <div className="emi-content-grid container">

                    {/* LEFT CONTENT */}
                    <div className="emi-info-side">
                        <h2>Plan your dream home confidently</h2>
                        <p>
                            Estimate your monthly EMI, interest cost, and
                            repayment schedule before applying for a home loan.
                        </p>

                        <div className="value-props">
                            <div className="prop">
                                <div className="prop-dot"></div>
                                <div>
                                    <strong>Lower Interest Rates</strong>
                                    <p>Enjoy affordable EMIs with long tenures.</p>
                                </div>
                            </div>

                            <div className="prop">
                                <div className="prop-dot"></div>
                                <div>
                                    <strong>Long-Term Planning</strong>
                                    <p>Visualize repayment up to 30 years.</p>
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
                                        <label>Home Loan Amount</label>
                                        <span className="value-display">
                                            ₹{amount.toLocaleString()}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="500000"
                                        max="50000000"
                                        step="500000"
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
                                        min="7"
                                        max="11"
                                        step="0.1"
                                        value={rate}
                                        style={{ backgroundSize: `${rateFill}% 100%` }}
                                        onChange={(e) => setRate(Number(e.target.value))}
                                    />
                                </div>

                                <div className="slider-box">
                                    <div className="label-row">
                                        <label>Loan Tenure</label>
                                        <span className="value-display">
                                            {Math.floor(tenure / 12)} Years
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="60"
                                        max="360"
                                        step="12"
                                        value={tenure}
                                        style={{ backgroundSize: `${tenureFill}% 100%` }}
                                        onChange={(e) => setTenure(Number(e.target.value))}
                                    />
                                </div>
                            </div>

                            <div className="calc-footer">
                                <span className="res-label">Monthly Home Loan EMI</span>
                                <h2 className="res-value">
                                    ₹{emi.toLocaleString()}
                                </h2>
                                <button className="cta-btn-primary">
                                    Apply for Home Loan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SCHEDULE */}
                <div className="demo">
                    <div className="container schedule-section">
                        <h2 className="schedule-main-title">
                            Home Loan <span>Repayment Schedule</span>
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
                    <h2>Home Loan <span>FAQs</span></h2>
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

export default HomeLoanCalculator;
