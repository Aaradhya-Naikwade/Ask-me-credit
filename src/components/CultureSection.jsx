import { motion } from "framer-motion";
import "./CultureSection.css";

const values = [
  {
    id: 1,
    title: "Synergy First",
    desc: "Great ideas don’t have a hierarchy. We believe in the power of teamwork and win as one united team.",
    icon: "🤝"
  },
  {
    id: 2,
    title: "Fearless Innovation",
    desc: "We don’t just follow trends; we set them through constant experimentation.",
    icon: "🚀"
  },
  {
    id: 3,
    title: "Empathy Driven",
    desc: "We build for people, not just for users. Our customers are at the heart of everything.",
    icon: "❤️"
  },
  {
    id: 4,
    title: "Agile Mindset",
    desc: "We move fast, learn faster, and evolve with the dynamic fintech landscape.",
    icon: "🌀"
  },
];

const CultureSection = () => {
  return (
    <section className="culture-section">
      <div className="container">
        <motion.div 
          className="culture-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Build the Future of Financial Freedom</h2>
          <p>
            We are more than a fintech; we are a collective of thinkers and doers 
            redefining how India interacts with money.
          </p>
        </motion.div>

        <div className="culture-grid">
          {values.map((item, index) => (
            <motion.div 
              key={item.id}
              className="culture-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card-icon">{item.icon}</div>
              <div className="card-text">
                <h3>{item.title}</h3> 
                <p>{item.desc}</p>
              </div>
            </motion.div>

            
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;