import React from 'react';
import streakForgeImg from '../Asset/Project/streak-forge.png';
import platformerImg from '../Asset/Project/Platformaning_knight_Game_Play.png';
import mathPuzzleImg from '../Asset/Project/kid-math-puzzle_Game_Play.png';
import abstractImg from '../Asset/Art/Mysterious Abstract Terrain - Sci-Fi Moody Landscape Art.jpeg';
import propic from '../Asset/propic/MainPropic.png';
import portfolioV1Img from '../Asset/Project/Portfolio-ver-1Protfolio.png';

// Art Assets
import art1 from '../Asset/Art/Cyberpunk Cube Abstract - Glitch Aesthetic Digital Art Print.jpeg';
import art2 from '../Asset/Art/Mysterious Abstract Terrain - Sci-Fi Moody Landscape Art.jpeg';
import art3 from '../Asset/Art/Serene Green & White Abstract Sphere Art - Organic Digital Design.jpeg';

import audio1 from '../Asset/Music/lofi_G_3.mp3';
import audio2 from '../Asset/Music/try_H_4.mp3';

const programmingProjects = {
  web: [
    {
      title: "Streak Forge",
      description: "Built a productivity and habit-tracking web application focused on clean UI and interactive tracking systems.",
      link: "https://streak-forge-omega.vercel.app/",
      github: "https://github.com/lucky20T/streak-forge",
      image: streakForgeImg,
      tags: ["React", "Component-Based", "Responsive"]
    },
    {
      title: "Portfolio Website (Old Version)",
      description: "Built a personal portfolio website showcasing projects, skills, and my development journey.",
      link: "https://lucky20t.github.io/Portfolio-ver-1/Protfolio3.html",
      image: portfolioV1Img,
      tags: ["HTML/CSS", "JavaScript", "Vibe Coding"]
    }
  ],
  game: [
    {
      title: "Platforming Knight",
      description: "My first game project built in Godot. Features 2D platforming mechanics, combat systems, and custom level design.",
      link: "https://lucky20t.github.io/first_try_GoDot/GoDot/index.html",
      github: "https://github.com/lucky20T/first_try_GoDot",
      image: platformerImg,
      tags: ["Godot", "GDScript", "2D Platformer"]
    },
    {
      title: "Math Puzzle Game",
      description: "Built a React-based math puzzle game using vibe coding workflows. Designed responsive UI and interactive puzzle mechanics.",
      link: "https://kid-math-puzzle.vercel.app/",
      github: "https://github.com/lucky20T/kid-math-puzzle",
      image: mathPuzzleImg,
      tags: ["React", "UI/UX", "Vibe Coding"]
    }
  ]
};

const artProjects = [
  {
    title: "Cyberpunk Cube",
    description: "Abstract glitch aesthetic digital art print exploring geometric forms.",
    image: art1,
    tags: ["Digital Art", "Abstract"]
  },
  {
    title: "Mysterious Terrain",
    description: "Sci-Fi moody landscape art focusing on atmosphere and lighting.",
    image: art2,
    tags: ["3D Environment", "Sci-Fi"]
  },
  {
    title: "Organic Sphere",
    description: "Serene abstract organic digital design focusing on flow and balance.",
    image: art3,
    tags: ["Organic", "Abstract"]
  }
];

const soundProjects = [
  {
    title: "Lofi Beats - Track 3",
    description: "Atmospheric lofi production created in FL Studio.",
    tags: ["FL Studio", "Lofi"],
    audio: audio1
  },
  {
    title: "Creative Soundscape - Track 4",
    description: "Experimental sound design project exploring unique textures.",
    tags: ["FL Studio", "Sound Design"],
    audio: audio2
  }
];

const gddLink = "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2YvYy8yMThCNzdEMzQ4QTAxMDMzL0lnQVVvdDU4ZEhnY1FwaWpTeF9lX2JhMEFXazRSd1pZRnZjQnU1RE90WUdVZmxZP2U9VDlPTmFs&id=218B77D348A01033%21s7cdea2147874421c98a34b1fdefdb6b4&cid=218B77D348A01033";

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        {/* SECTION 1: PROGRAMMING */}
        <div className="main-category" data-aos="fade-up">
          <h2 className="section-title">Programming <span className="gradient-text">Projects</span></h2>
          
          {/* Game Development Sub-section */}
          <div className="sub-category">
            <div className="sub-header-with-link">
              <h3 className="sub-title">Game Development</h3>
              <a href={gddLink} target="_blank" rel="noopener noreferrer" className="gdd-link">
                View GDD Collection 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
            <div className="projects-grid">
              {programmingProjects.game.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* Web Development Sub-section */}
          <div className="sub-category">
            <h3 className="sub-title">Web Development</h3>
            <div className="projects-grid">
              {programmingProjects.web.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: ARTS */}
        <div className="main-category" style={{marginTop: '100px'}} data-aos="fade-up">
          <div className="sub-header-with-link">
            <h2 className="section-title">Digital Art & <span className="gradient-text">3D Design</span></h2>
            <div className="external-links">
              <a href="https://in.pinterest.com/vishalchakradhari6/" target="_blank" rel="noopener noreferrer" className="gdd-link">
                Pinterest
              </a>
              <a href="https://www.artstation.com/" target="_blank" rel="noopener noreferrer" className="gdd-link">
                ArtStation
              </a>
            </div>
          </div>
          <div className="projects-grid">
            {artProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* SECTION 3: SOUND DESIGN */}
        <div className="main-category" style={{marginTop: '100px'}} data-aos="fade-up">
          <div className="sub-header-with-link">
            <h2 className="section-title">Sound Design & <span className="gradient-text">Music</span></h2>
            <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" className="gdd-link">
              Find more on Spotify
            </a>
          </div>
          <div className="projects-grid">
            {soundProjects.map((project, index) => (
              <div key={index} className="project-card glass-card sound-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="audio-player-wrapper">
                    <div className="audio-wave">
                      <span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <audio controls className="custom-audio">
                      <source src={project.audio} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="project-card glass-card" data-aos="fade-up">
    {project.image && (
      <div className="project-img-wrapper">
        <img src={project.image} alt={project.title} className="project-img" />
      </div>
    )}
    <div className="project-info">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
      <div className="project-actions">
        {project.link && project.link !== "#" && (
          <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
            Live Demo 
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        )}
        {project.github && (
          <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-secondary)' }}>
            Code 
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Projects;
