import React from 'react';

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
      </div>
    </section>
  );
};

export default Skills;
