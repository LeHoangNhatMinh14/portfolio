import { useEffect, useRef } from 'react';

export default function Skills() {
  const skills = [
    { name: 'React', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'CSS', level: 80 }
  ];

  const barsRef = useRef([]);

  useEffect(() => {
    // Animate progress bars on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = `${entry.target.dataset.level}%`;
        }
      });
    }, { threshold: 0.5 });

    barsRef.current.forEach(bar => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div
                ref={el => barsRef.current[index] = el}
                className="progress-fill"
                data-level={skill.level}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}