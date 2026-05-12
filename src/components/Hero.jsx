import React from 'react';
import abstractImg from '../Asset/Art/Mysterious Abstract Terrain - Sci-Fi Moody Landscape Art.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="section hero-section">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h4 className="hero-subtitle">Future Game Developer & Web Enthusiast</h4>
          <h1 className="hero-title">
            Building Worlds <br />
            <span className="gradient-text">One Frame</span> At A Time
          </h1>
          <p className="hero-description">
            I'm an aspiring Game Developer specializing in C++ and Unreal Engine, 
            blending immersive storytelling with modern web technologies and 3D art.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">Explore My Universe</a>
            <a href="#contact" className="btn btn-outline">Let's Collaborate</a>
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
