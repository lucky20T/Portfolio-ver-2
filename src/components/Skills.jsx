import React from 'react';
import certUnreal from '../Asset/Certifications/CertificateOfCompletion_Unreal Engine 5.6 Essential Training.png';
import certCpp from '../Asset/Certifications/C--_Essentials_1_certificate.png';
import certHackMadras from '../Asset/Certifications/Game_Trade_Hackathon_IIT_Madras.png';
import certHackSprint from '../Asset/Certifications/Participation_Certificate_Hack-a-Sprint.jpg';

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

const certifications = [
  {
    title: "Unreal Engine 5.6 Essential Training",
    issuer: "LinkedIn Learning",
    image: certUnreal,
    id: "8640f583ff56b16e13b968545d8af96131934cec586a21ced458efdb59fed0d8"
  },
  {
    title: "C++ Essentials 1",
    issuer: "Cisco Networking Academy / C++ Institute",
    image: certCpp,
  },
  {
    title: "Game Trade Hackathon",
    issuer: "IIT Madras",
    image: certHackMadras,
  },
  {
    title: "Hack-a-Sprint",
    issuer: "Participation Certificate",
    image: certHackSprint,
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
        
        <div className="projects-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card glass-card" data-aos="zoom-in" data-aos-delay={index * 100} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="cert-img-wrapper" style={{ borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
                <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="cert-info" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{cert.title}</h3>
                <p style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1rem' }}>{cert.issuer}</p>
                {cert.id && (
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', marginTop: 'auto' }}>
                    <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Certificate ID</span>
                    <p style={{ fontSize: '0.8rem', wordBreak: 'break-all', fontFamily: 'monospace', color: 'var(--text-primary)', margin: 0 }}>
                      {cert.id}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
