import { motion } from 'framer-motion';
import { aboutMe } from '../data/portfolio';
import SectionTitle from './SectionTitle';
import './About.css';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle subtitle="Get To Know" title="About Me" />

        <div className="about-content">
          <motion.div
            className="about-bio glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-bio-glow" />
            <p>{aboutMe.bio}</p>
          </motion.div>

          <div className="about-facts">
            {aboutMe.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="fact-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)',
                }}
              >
                <span className="fact-emoji">{fact.emoji}</span>
                <span className="fact-text">{fact.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
