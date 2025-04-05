import { FaReact, FaJs, FaCss3Alt, FaUnity, FaDocker} from 'react-icons/fa'; // Import icons
import { TbBrandCSharp } from "react-icons/tb";
import '../styles/Skills.css'

export default function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact />, category: 'Frontend' },
    { name: 'JavaScript', icon: <FaJs />, category: 'Language' },
    { name: 'CSS', icon: <FaCss3Alt />, category: 'Styling' },
    { name: 'Node.js', icon: <FaJs />, category: 'Backend' },
    { name: 'Python', icon: <FaJs />, category: 'Language' },
    { name: 'Unity', icon: <FaUnity />, category: 'Game Dev'},
    { name: 'Unity', icon: <TbBrandCSharp />, category: 'Language'},
    { name: 'Docker', icon: <FaDocker />, category: 'CI/CD'},
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technologies I Use</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <span className="skill-category">{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}