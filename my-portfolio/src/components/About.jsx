import { motion } from 'framer-motion';
import '../styles/About.css';

export default function About() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={variants}
          className="about-content"
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>
              I'm a passionate software developer currently studying ICT at Fontys. 
              With over 2 years of hands-on experience, I specialize in building 
              responsive web applications using modern JavaScript frameworks.
            </p>
            <div className="about-cta">
              <a 
                href="/documents/LHNM_CV.pdf" 
                download="LeHoangNhatMinh_CV.pdf"
                className="resume-button"
              >
                Download Full CV
              </a>
              <a 
                href="/documents/LHNM_CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button secondary"
              >
                View in Browser
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}