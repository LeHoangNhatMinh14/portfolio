import { useEffect, useRef } from 'react';
import profileImage from '../documents/profile.jpg';
import '../styles/Hero.css';
import { image } from 'framer-motion/client';

export default function Hero({ scrollToProjects }) {
  const heroRef = useRef(null);

  useEffect(() => {
    // Fade-in animation
    heroRef.current.style.opacity = 1;
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Minh</span>
          </h1>
          <p className="subtitle">
            Crafting exceptional digital experiences with React, Node.js, and modern web technologies
          </p>
          <div className="hero-buttons">
            <button 
              onClick={scrollToProjects}
              className="cta-button"
            >
              View My Work ↓
            </button>
            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image">
          
        </div>
      </div>
    </section>
  );
}