import React from 'react';
import streakForgeImg from '../Asset/Project/streak-forge.png';
import platformerImg from '../Asset/Project/Platformaning_knight_Game_Play.png';
import mathPuzzleImg from '../Asset/Project/kid-math-puzzle_Game_Play.png';
import abstractImg from '../Asset/Art/Mysterious Abstract Terrain - Sci-Fi Moody Landscape Art.jpeg';
import propic from '../Asset/propic/MainPropic.png';
import portfolioV1Img from '../Asset/Project/Portfolio-ver-1Protfolio.png';

const projects = [
  {
    title: "Platforming Knight",
    category: "Game Dev",
    description: "My first game project built in Godot. Features 2D platforming mechanics, combat systems, and custom level design.",
    link: "#",
    image: platformerImg,
    tags: ["Godot", "GDScript", "2D Platformer"]
  },
  {
    title: "Math Puzzle Game",
    category: "Game Dev",
    description: "Built a React-based math puzzle game using vibe coding workflows. Designed responsive UI and interactive puzzle mechanics.",
    link: "https://kid-math-puzzle.vercel.app/",
    image: mathPuzzleImg,
    tags: ["React", "UI/UX", "Vibe Coding"]
  },
  {
    title: "Streak Forge",
    category: "Web Application",
    description: "Built a productivity and habit-tracking web application focused on clean UI and interactive tracking systems.",
    link: "https://streak-forge-omega.vercel.app/",
    image: streakForgeImg,
    tags: ["React", "Component-Based", "Responsive"]
  },
  {
    title: "Portfolio Website (Old Version)",
    category: "Web Application",
    description: "Built a personal portfolio website showcasing projects, skills, and my development journey.",
    link: "https://lucky20t.github.io/Portfolio-ver-1/Protfolio3.html",
    image: portfolioV1Img,
    tags: ["HTML/CSS", "JavaScript", "Vibe Coding"]
  },
  {
    title: "3D Environment Experiments",
    category: "3D Art & Design",
    description: "Created 3D models and environment experiments using Blender. Practiced lighting, scene composition, and environment workflows.",
    link: "#",
    image: abstractImg,
    tags: ["Blender", "3D Modeling", "Lighting"]
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
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
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
