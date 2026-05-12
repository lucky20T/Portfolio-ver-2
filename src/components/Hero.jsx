import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="section hero-section">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      
      <div className="container">
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
      </div>
    </section>
  );
};

export default Hero;
