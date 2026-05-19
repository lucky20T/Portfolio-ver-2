import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="gradient-text">VISHAL CHAKRADHARI</span>
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
                <li><a href="https://github.com/lucky20T" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/vishal-chakradhari-b481272ba" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://x.com/Vishalchak6659" target="_blank" rel="noreferrer">Twitter / X</a></li>
                <li><a href="https://www.instagram.com/vritrahan_studios/" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://in.pinterest.com/vishalchakradhari6/" target="_blank" rel="noreferrer">Pinterest</a></li>
                <li><a href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy8yMThCNzdEMzQ4QTAxMDMzL0lnQVVvdDU4ZEhnY1FwaWpTeF9lX2JhMEFXazRSd1pZRnZjQnU1RE90WUdVZmxZP2U9VDlPTmFs&id=218B77D348A01033%21s7cdea2147874421c98a34b1fdefdb6b4&cid=218B77D348A01033" target="_blank" rel="noreferrer">GDD Collection</a></li>
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
