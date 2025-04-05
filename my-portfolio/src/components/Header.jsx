import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

export default function Header({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">Lê Hoàng Nhật Minh</a>
        
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
          <div className='nav-container'>
            <nav className={isMenuOpen ? 'active' : ''}>
              <ul>
                {navItems.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={activeSection === item.id ? 'active' : ''}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>  
      </div>
    </header>
  );
}