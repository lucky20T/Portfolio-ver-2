import React from 'react';
import abstractImg from '../Asset/Art/Mysterious Abstract Terrain - Sci-Fi Moody Landscape Art.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="section hero-section">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h4 className="hero-subtitle">Frontend Developer & Game Designer</h4>
          <h1 className="hero-title">
            Crafting Digital <br />
            <span className="gradient-text">Experiences</span> That Matter
          </h1>
          <p className="hero-description">
            I build immersive web applications and interactive games with a focus on 
            performance, aesthetics, and user-centric design.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Let's Talk</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="abstract-card glass-card">
            <img src={abstractImg} alt="Abstract Art" className="hero-abstract-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
