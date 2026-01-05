import { motion } from "framer-motion";
import "./StatsSection.css";

const stats = [
  { id: 1, label: "Active Users", value: "50K+" },
  { id: 2, label: "Happy Customers", value: "12K+" },
  { id: 3, label: "Amount Disbursed", value: "25 Cr+" },
  { id: 4, label: "Cities Covered", value: "15+" },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <motion.div 
          className="stats-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Trusted by users across the nation</h2>
        </motion.div>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              className="stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;