import React from 'react';
import unrealCertImg from '../Asset/Certifications/CertificateOfCompletion_Unreal Engine 5.6 Essential Training.png';

const skills = [
  { 
    name: "Programming", 
    items: ["C++", "Python (Basic)", "React"] 
  },
  { 
    name: "Game Development", 
    items: ["Unreal Engine (Blueprints, Gameplay)", "Godot (Basics)"] 
  },
  { 
    name: "3D & Creative Tools", 
    items: ["Blender (2D & 3D Modeling)", "FL Studio (Basics)", "Sketching"] 
  },
  {
    name: "Other Skills",
    items: ["Problem Solving", "Game Logic Design", "Basic UI Development", "Content Creation"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title" style={{textAlign: 'center', marginBottom: '4rem'}} data-aos="fade-up">
          Technical <span className="gradient-text">Toolkit</span>
        </h2>
        
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category glass-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <h3 className="skill-group-name">{skillGroup.name}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-dot"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CERTIFICATIONS SECTION */}
        <h2 className="section-title" style={{textAlign: 'center', margin: '6rem 0 3rem'}} data-aos="fade-up">
          Licenses & <span className="gradient-text">Certifications</span>
        </h2>
        
        <div className="cert-card glass-card" data-aos="zoom-in" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div className="cert-img-wrapper" style={{ flex: '1 1 300px', borderRadius: '12px', overflow: 'hidden' }}>
            <img src={unrealCertImg} alt="Unreal Engine 5.6 Essential Training Certificate" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div className="cert-info" style={{ flex: '2 1 400px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Unreal Engine 5.6 Essential Training</h3>
            <p style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1.5rem' }}>LinkedIn Learning</p>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Certificate ID</span>
              <p style={{ fontSize: '0.9rem', wordBreak: 'break-all', fontFamily: 'monospace', color: 'var(--text-primary)' }}>
                8640f583ff56b16e13b968545d8af96131934cec586a21ced458efdb59fed0d8
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
