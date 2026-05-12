import React from 'react';
import propic from '../Asset/propic/MainPropic.png';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <div className="image-wrapper">
              <img src={propic} alt="Vishal" className="profile-img" />
              <div className="image-border"></div>
            </div>
          </div>
          <div className="about-content">
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
            <p className="about-text">
              I'm a passionate developer based in India, specializing in React.js and modern web technologies. 
              My journey started with a fascination for how things work under the hood, which led me to the 
              world of coding and game development.
            </p>
            <p className="about-text">
              I believe that great software is the perfect blend of logic and creativity. Whether it's 
              optimizing a SaaS dashboard or designing a complex game mechanic, I strive for excellence 
              in every pixel and line of code.
            </p>
            
            <div className="stats-grid">
              <div className="stat-card glass-card">
                <h3>3+</h3>
                <p>Years Exp.</p>
              </div>
              <div className="stat-card glass-card">
                <h3>20+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-card glass-card">
                <h3>10+</h3>
                <p>Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
