import { motion } from 'framer-motion';
import './SectionTitle.css';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <h2>{title}</h2>
      <div className="section-title-line">
        <div className="section-title-dot" />
      </div>
    </motion.div>
  );
};

export default SectionTitle;
