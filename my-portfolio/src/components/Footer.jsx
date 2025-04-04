import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css'; // Create this CSS file

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container">
        <div className="footer-grid">
          {/* Contact Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Get In Touch</h3>
            <ul className="contact-list">
              <li>
                <FaEnvelope className="icon" />
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </li>
              <li>
                <span className="icon">📱</span>
                <span>+1 (234) 567-8900</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer">
                <FaTwitter className="social-icon" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="copyright"
          variants={itemVariants}
        >
          <p>© {currentYear} Your Name. All rights reserved.</p>
          <p>Built with React & Vite</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}