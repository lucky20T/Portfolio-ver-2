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
            <div className="education-section" style={{marginTop: '2rem', marginBottom: '1.5rem'}}>
              <h3 style={{color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Education</h3>
              
              <div className="edu-item" style={{marginBottom: '1rem'}}>
                <h4 style={{fontSize: '1.1rem', color: 'var(--text-primary)'}}>Bachelor of Technology (B.Tech), Computer Science</h4>
                <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>SAGE University, Indore • 2024 – Present</p>
              </div>

              <div className="edu-item" style={{marginBottom: '1rem'}}>
                <h4 style={{fontSize: '1.1rem', color: 'var(--text-primary)'}}>Class 12th (CBSE)</h4>
                <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Kendriya Vidyalaya • 2024</p>
              </div>

              <div className="edu-item">
                <h4 style={{fontSize: '1.1rem', color: 'var(--text-primary)'}}>Class 10th (CBSE)</h4>
                <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Kendriya Vidyalaya • 2022</p>
              </div>
            </div>
            <p className="about-text">
              <strong>Interests & Extracurriculars:</strong> Beyond coding, I am deeply involved in 3D Environment Design, Sketching, Concept Art, Chess, Learning Japanese, and exploring Indie Games and Creative Projects.
            </p>
            
            <div className="stats-grid">
              <div className="stat-card glass-card">
                <h3>Intern</h3>
                <p>Experience</p>
              </div>
              <div className="stat-card glass-card">
                <h3>5+</h3>
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
