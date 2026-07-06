import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';
import SectionTitle from './SectionTitle';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionTitle subtitle="My Journey" title="Experience" />

        <div className="timeline">
          <div className="timeline-line" />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="timeline-node">
                <div className="timeline-node-inner" />
              </div>
              <div className="timeline-card glass-card">
                <div className="timeline-card-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-type-badge">{exp.type}</span>
                </div>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-period">{exp.period}</p>
                <ul className="timeline-details">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
