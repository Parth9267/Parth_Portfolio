import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';
import SectionTitle from './SectionTitle';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integration point for EmailJS / Formspree
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionTitle subtitle="Get In Touch" title="Contact Me" />

        <div className="contact-grid">
          {/* Form */}
          <motion.form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`form-group ${focused.name || formData.name ? 'form-group-active' : ''}`}>
              <label htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused({ ...focused, name: true })}
                onBlur={() => setFocused({ ...focused, name: false })}
                required
              />
            </div>

            <div className={`form-group ${focused.email || formData.email ? 'form-group-active' : ''}`}>
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused({ ...focused, email: true })}
                onBlur={() => setFocused({ ...focused, email: false })}
                required
              />
            </div>

            <div className={`form-group ${focused.message || formData.message ? 'form-group-active' : ''}`}>
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused({ ...focused, message: true })}
                onBlur={() => setFocused({ ...focused, message: false })}
                required
              />
            </div>

            <button type="submit" className="btn-primary contact-submit">
              <span>
                <FiSend /> Send Message
              </span>
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-card glass-card">
              <FiMail className="contact-info-icon" />
              <div>
                <h4>Email</h4>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="contact-info-card glass-card">
              <FiMapPin className="contact-info-icon" />
              <div>
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-link"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
