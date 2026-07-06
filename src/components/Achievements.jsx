import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { achievements } from '../data/portfolio';
import SectionTitle from './SectionTitle';
import './Achievements.css';

const AnimatedCounter = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.round(current * 100) / 100);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="counter-value gradient-text">
      {typeof value === 'number' && value % 1 !== 0 ? count.toFixed(2) : Math.round(count)}
      {suffix}
    </span>
  );
};

const Achievements = () => {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <SectionTitle subtitle="Milestones" title="Achievements" />

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor="#7f5af0"
                glareBorderRadius="16px"
              >
                <div className="achievement-card glass-card">
                  <span className="achievement-icon">{achievement.icon}</span>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  {achievement.value !== undefined && (
                    <AnimatedCounter value={achievement.value} />
                  )}
                  <p className="achievement-subtitle">{achievement.subtitle}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
