import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/About.css';
import cvPdf from '../documents/LHNM_CV.pdf';

export default function About() {
  const [fileSize, setFileSize] = useState('');
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    async function getFileSize() {
      try {
        const response = await fetch(cvPdf);
        const blob = await response.blob();
        const sizeInMB = (blob.size / (1024*1024)).toFixed(1);
        setFileSize(`(PDF, ${sizeInMB}MB)`);
        
      } catch (error) {
        console.error("Error getting file size:", error);
        setFileSize("(PDF)");
      }
    }

    getFileSize();
  }, []);

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
              Hi! I'm a second-year Software student at ICT Fontys with a strong focus on programming. 
              I'm passionate about building things that work — from desktop tools to web applications — 
              and I strive to grow a little more with every project I take on.
            </p>
            
            <div className="about-cta">
              <a 
                href={cvPdf} 
                download="LeHoangNhatMinh_CV.pdf"
                className="resume-button"
                aria-label="Download CV"
              >
                Download CV {fileSize && <span className="file-size">{fileSize}</span>}
              </a>
              
              <button 
                onClick={() => window.open(cvPdf, '_blank')}
                className="resume-button secondary"
                aria-label="View CV in browser"
              >
                View CV
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}