import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import abstractImg from '../Asset/Art/Mysterious Abstract Terrain - Sci-Fi Moody Landscape Art.jpeg';
import resumePdf from '../Asset/Resume.pdf';

const Hero = ({ onOpenContact }) => {
  return (
    <section id="hero" className="section hero-section">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h4 className="hero-subtitle" data-aos="fade-up">
            <TypeAnimation
              sequence={[
                'Aspiring Game Developer • Unreal Engine • C++',
                2000,
                'Aspiring Game Developer • 3D Artist • Blender',
                2000,
                'Aspiring Game Developer • Logic Designer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h4>
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
            Building Worlds <br />
            <span className="gradient-text">One Frame</span> At A Time
          </h1>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
            B.Tech Computer Science student building gameplay systems, 
            immersive prototypes, and real-world projects — one commit at a time.
          </p>
          <div className="hero-btns" style={{flexWrap: 'wrap'}} data-aos="fade-up" data-aos-delay="300">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Resume
              </span>
            </a>
            <button onClick={onOpenContact} className="btn btn-outline">Let's Collaborate</button>
          </div>
        </div>
        <div className="hero-visual" data-aos="zoom-in" data-aos-delay="200">
          <div className="abstract-card glass-card">
            <img src={abstractImg} alt="Abstract Art" className="hero-abstract-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
