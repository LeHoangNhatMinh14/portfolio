import { useEffect, useRef } from 'react';
import '../styles/Hero.css';
import profileImage from "../documents/profile.jpg"; // Renamed for clarity

export default function Hero({ scrollToProjects }) {
  const heroRef = useRef(null);

  useEffect(() => {
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
            Just a developer that likes to mess around
          </p>
          <div className="hero-buttons">
            <button 
              onClick={scrollToProjects}
              className="cta-button"
              aria-label="View my projects"
            >
              View My Work ↓
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-picture">
            <img 
              src={profileImage} 
              alt="Profile of Minh" 
              className="profile-img"
              loading="lazy" // Better performance
            />
          </div>
        </div>
      </div>
    </section>
  );
}