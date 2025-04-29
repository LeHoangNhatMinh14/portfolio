import { useState } from 'react';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  const fallbackImage = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';

  return (
    <div 
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image">
        <img 
          src={project.image || fallbackImage} 
          alt={project.title}
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.technologies.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.frontEndgithubURL && (
            <a href={project.frontEndgithubURL} target="_blank" rel="noreferrer" className="link-button">
              Frontend code
            </a>
          )}
          {project.backEndgithubUrl && (
            <a href={project.backEndgithubUrl} target="_blank" rel="noreferrer" className="link-button secondary">
              Backend Code
            </a>
          )}
          {project.itchIowebGame && (
            <a href={project.itchIowebGame} target="_blank" rel="noreferrer" className="link-button">
              Itch.io upload
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
