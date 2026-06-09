import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">veb<span>creators</span></a>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Expertise</a></li>
          <li><a href="#portfolio">Our Work</a></li>
          <li><a href="#contact" className="btn-primary">Get in Touch</a></li>
        </ul>
        <div className="hamburger" onClick={() => setMenuActive(!menuActive)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
