import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = personalInfo.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section className="hero section" id="hero">
      <div className="container hero-container">
        {/* Pulse Rings */}
        <div className="hero-pulse-rings">
          <div className="pulse-ring" />
          <div className="pulse-ring" style={{ animationDelay: '0.5s' }} />
          <div className="pulse-ring" style={{ animationDelay: '1s' }} />
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >


          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>
            <br />
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">I'm a </span>
            <span className="role-text gradient-text-alt">{text}</span>
            <span className="role-cursor">|</span>
          </div>

          <motion.p
            className="hero-bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="scroll-mouse">
            <div className="scroll-dot" />
          </div>
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
