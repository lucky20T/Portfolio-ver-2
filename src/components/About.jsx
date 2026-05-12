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
              <strong>Objective:</strong> I am an aspiring Game Developer focused on <strong>Unreal Engine, C++</strong>, and interactive gameplay systems. Passionate about building game projects, improving technical skills, and combining creativity with problem-solving through hands-on development.
            </p>
            <p className="about-text">
              <strong>Education:</strong> I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering at SAGE University, Indore (2024 – Present).
            </p>
            <p className="about-text">
              <strong>Interests & Extracurriculars:</strong> Beyond coding, I am deeply involved in 3D Environment Design, Sketching, Concept Art, Chess, Learning Japanese, and exploring Indie Games and Creative Projects.
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
