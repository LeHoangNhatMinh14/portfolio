import { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Hero.css';

export default function Hero({ scrollToProjects }) {
  const heroRef = useRef(null);

  useEffect(() => {
    // Fade-in animation
    heroRef.current.style.opacity = 1;
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <TypeAnimation
            sequence={[
              'Software Developer',
              1000,
              'Frontend Specialist',
              1000,
              'Tech Enthusiast',
              1000
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />
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
          <img 
            src="/developer-illustration.svg" 
            alt="Developer illustration" 
            className="floating-animation"
          />
        </div>
      </div>
    </section>
  );
}