import React from 'react';

const skills = [
  { 
    name: "Game Development", 
    items: ["C++", "Unreal Engine", "Blender", "FL Studio"] 
  },
  { 
    name: "Web Technologies", 
    items: ["React", "Vite", "JavaScript", "HTML5", "CSS3"] 
  },
  { 
    name: "Design & Creative", 
    items: ["UI/UX Design", "Vibe Coding", "Git", "GitHub"] 
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title" style={{textAlign: 'center', marginBottom: '4rem'}}>
          Technical <span className="gradient-text">Toolkit</span>
        </h2>
        
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category glass-card">
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
