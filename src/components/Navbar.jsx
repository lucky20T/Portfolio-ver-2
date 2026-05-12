import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span className="gradient-text">VISHAL</span>
        </div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><button onClick={onOpenContact} style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)'}}>Contact</button></li>
        </ul>
        <button onClick={onOpenContact} className="btn btn-outline nav-btn">Hire Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
