import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import SectionTitle from './SectionTitle';
import './Skills.css';

const categoryIcons = {
  Languages: '💻',
  Frameworks: '🚀',
  'AI/ML': '🧠',
  Databases: '🗄️',
  Tools: '🛠️',
  Concepts: '📐',
};

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionTitle subtitle="What I Work With" title="Tech Stack" />

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <div className="skill-category-header">
                <span className="skill-category-icon">{categoryIcons[category] || '📦'}</span>
                <h3>{category}</h3>
              </div>
              <div className="skill-items">
                {items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-chip"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.04, duration: 0.3 }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
