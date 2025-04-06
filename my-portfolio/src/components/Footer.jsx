import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

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
      <div className="footer-container">
        <div className="footer-grid">
          {/* Contact Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Contact</h3>
            <div className="section-content">
              <ul className="contact-list">
                <li>
                  <FaEnvelope className="icon" />
                  <a href="mailto:minh.lhn14@gmail.com">minh.lhn14@gmail.com</a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Social</h3>
            <div className="section-content">
              <div className="social-links">
                <a href="https://github.com/LeHoangNhatMinh14" target="_blank" rel="noreferrer">
                  <FaGithub className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/nh%E1%BA%ADt-minh-l%C3%AA-ho%C3%A0ng-993801295/" target="_blank" rel="noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Links</h3>
            <div className="section-content">
              <ul className="quick-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div className="copyright" variants={itemVariants}>
          <p>© {currentYear} Nhat Minh</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}