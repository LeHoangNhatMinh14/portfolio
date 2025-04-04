import { motion } from 'framer-motion';
import '../styles/About.css';

export default function About() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={variants}
          className="about-content"
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a passionate software developer currently studying ICT at Fontys. 
                With over 2 years of hands-on experience, I specialize in building 
                responsive web applications using modern JavaScript frameworks.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source 
                projects, learning new technologies, or mentoring junior developers.
              </p>
              <div className="about-cta">
                <a href="/resume.pdf" download className="resume-button">
                  Download Resume
                </a>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="/profile-picture.jpg" 
                alt="Profile" 
                className="profile-image"
              />
              <div className="image-decorator"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}