import { motion } from "framer-motion";
import "./WhySection.css";

const reasons = [
    {
        id: 1,
        title: "Trusted Platform",
        description: "Your data is secure with industry-leading encryption.",
        icon: "🔒", // Replace with actual SVG later
    },
    {
        id: 2,
        title: "Quick Approval",
        description: "Fast eligibility checks and rapid fund disbursal.",
        icon: "⚡", // Replace with actual SVG later
    },
    {
        id: 3,
        title: "Transparent Pricing",
        description: "No hidden fees, clear terms, always upfront.",
        icon: "💰", // Replace with actual SVG later
    },
    {
        id: 4,
        title: "Easy-to-Use",
        description: "Intuitive interface, simple application process.",
        icon: "✨", // Replace with actual SVG later
    },
];

const WhySection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Stagger cards
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="why-section">
            <div className="container why-container">
                {/* Left Content */}
                <motion.div
                    className="why-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>Why <span>Ask Me Credit?</span></h2>
                    <p>
                        We're revolutionizing the way you access credit. Our platform is designed
                        for speed, clarity, and security, ensuring you get the financial support
                        you need, precisely when you need it.
                    </p>

                    <motion.div
                        className="feature-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {reasons.map((reason) => (
                            <motion.div className="feature-card" key={reason.id} variants={itemVariants}>
                                <div className="icon-placeholder">{reason.icon}</div>
                                <h4>{reason.title}</h4>
                                <p>{reason.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="home-image"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img src="src/assets/Demo.avif" alt="Why Choose Ask Me Credit" />
                </motion.div>
            </div>
        </section>
    );
};

export default WhySection;