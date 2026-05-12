import React from 'react';
import streakForgeImg from '../Asset/Project/streak-forge.png';
import platformerImg from '../Asset/Project/Platformaning_knight_Game_Play.png';
import mathPuzzleImg from '../Asset/Project/kid-math-puzzle_Game_Play.png';

const projects = [
  {
    title: "Streak Forge",
    category: "Web Application",
    description: "A productivity tool for habit tracking with real-time sync and data visualization.",
    link: "https://streak-forge-omega.vercel.app/",
    image: streakForgeImg,
    tags: ["React", "Cloud Sync", "UX Design"]
  },
  {
    title: "Platforming Knight",
    category: "Game Dev",
    description: "An action-packed 2D platformer with complex mechanics and immersive levels.",
    link: "#",
    image: platformerImg,
    tags: ["C#", "Unity", "Game Design"]
  },
  {
    title: "Kid Math Puzzle",
    category: "Educational Game",
    description: "An interactive puzzle game designed to make learning math fun for children.",
    link: "#",
    image: mathPuzzleImg,
    tags: ["JavaScript", "Game Dev", "Logic"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Selected <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">A glimpse into my creative and technical workspace.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-info">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  View Project 
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
