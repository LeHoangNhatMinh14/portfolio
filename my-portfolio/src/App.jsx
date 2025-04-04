import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer.jsx';
import './styles/main.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="portfolio-app">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToProjects={() => scrollToSection('projects')} />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Footer />
    </div>
  );
}