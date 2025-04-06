import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import '../styles/Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const allWorkOn = ['All', ...new Set(projects.map(project => project.workOn))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.workOn === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="filter-buttons">
          {allWorkOn.map(work => (
            <button
              key={work}
              onClick={() => setFilter(work)}
              className={filter === work ? 'active' : ''}
            >
              {work}
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
