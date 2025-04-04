import { useState } from 'react';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.title}
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.tech.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.demo} className="link-button">Live Demo</a>
          <a href={project.code} className="link-button secondary">Code</a>
        </div>
      </div>
    </div>
  );
}