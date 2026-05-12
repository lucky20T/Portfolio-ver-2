import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="gradient-text">VISHAL</span>
            <p>Aspiring Game Developer crafting immersive digital worlds.</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Social</h4>
              <ul>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Vishal. All rights reserved.</p>
          <div className="made-with">
            Created with <span>Passion</span> for Gaming
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
