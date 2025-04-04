import { useState } from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration and admin dashboard",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/project1.jpg",
    demo: "#",
    code: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Productivity application with real-time collaboration features",
    tech: ["Vue", "Firebase", "Tailwind CSS"],
    image: "/project2.jpg",
    demo: "#",
    code: "#"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tech.includes(filter));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="filter-buttons">
          <button 
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'active' : ''}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('React')}
            className={filter === 'React' ? 'active' : ''}
          >
            React
          </button>
          <button 
            onClick={() => setFilter('Vue')}
            className={filter === 'Vue' ? 'active' : ''}
          >
            Vue
          </button>
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