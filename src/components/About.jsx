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
            <h2 className="section-title">My <span className="gradient-text">Journey</span></h2>
            <p className="about-text">
              I'm a multi-disciplinary creator with a singular vision: to become a world-class Game Developer. 
              My expertise spans across <strong>C++</strong> and <strong>Unreal Engine</strong>, where I build the core mechanics of interactive experiences.
            </p>
            <p className="about-text">
              To bring my worlds to life, I leverage <strong>Blender</strong> for 3D modeling and <strong>FL Studio</strong> for immersive soundscapes. 
              My background in web development (React, JavaScript) allows me to bridge the gap between 
              interactive apps and high-fidelity gaming.
            </p>
            <p className="about-text">
              I believe in "vibe coding"—the art of creating software that feels alive, intuitive, and 
              aesthetically pleasing. Every line of code I write is a step toward building the next 
              great digital adventure.
            </p>
            
            <div className="stats-grid">
              <div className="stat-card glass-card">
                <h3>3+</h3>
                <p>Years Creative</p>
              </div>
              <div className="stat-card glass-card">
                <h3>15+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-card glass-card">
                <h3>100%</h3>
                <p>Game Dev Focus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
