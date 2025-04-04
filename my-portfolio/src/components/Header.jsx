export default function Header({ activeSection, scrollToSection }) {
    const navItems = [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' }
    ];
  
    return (
      <header className="header">
        <div className="container">
          <a href="#" className="logo">YourName</a>
          <nav>
            <ul>
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={activeSection === item.id ? 'active' : ''}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }