import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { projects } from '../data/portfolio';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import './Projects.css';

const ProjectCard = ({ project, index, onReadMore }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.5 }}
  >
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#00d4ff"
      glareBorderRadius="16px"
      scale={1.02}
    >
      <div className="project-card glass-card">
        <div className="project-card-top">
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
          <div className="project-links">
            {project.github && project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="GitHub">
                <FiGithub />
              </a>
            )}
            {project.live && project.live !== '#' && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link-icon" aria-label="Live demo">
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {project.highlight && (
          <p className="project-highlight">
            <span className="highlight-icon">⚡</span> {project.highlight}
          </p>
        )}

        <div className="project-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="stack-chip">{tech}</span>
          ))}
        </div>

        <button className="project-read-more" onClick={() => onReadMore(project)}>
          Read More →
        </button>
      </div>
    </Tilt>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    className="modal-overlay"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="modal-content glass-card"
      initial={{ scale: 0.85, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.85, opacity: 0, y: 40 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button className="modal-close" onClick={onClose} aria-label="Close modal">
        <FiX />
      </button>

      <div className="modal-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>

      <h3 className="modal-title">{project.title}</h3>
      <p className="modal-description">{project.description}</p>

      {project.highlight && (
        <div className="modal-highlight">
          <span className="highlight-icon">⚡</span> {project.highlight}
        </div>
      )}

      <div className="modal-section">
        <h4>Tech Stack</h4>
        <div className="project-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="stack-chip">{tech}</span>
          ))}
        </div>
      </div>

      <div className="modal-actions">
        {project.github && project.github !== '#' && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <FiGithub /> GitHub
          </a>
        )}
        {project.live && project.live !== '#' && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span><FiExternalLink /> Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionTitle subtitle="My Work" title="Projects" />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onReadMore={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
