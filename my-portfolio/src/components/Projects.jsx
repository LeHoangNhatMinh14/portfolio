import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import '../styles/Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  // Get all unique technologies for filtering
  const allTech = ['All', ...new Set(
    projects.flatMap(project => project.technologies)
  )];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="filter-buttons">
          {allTech.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={filter === tech ? 'active' : ''}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}