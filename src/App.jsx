import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarsBackground from './components/StarsBackground';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="app">
      <StarsBackground />
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <main>
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <About />
        <Projects />
        <Skills />
      </main>
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <Footer />
    </div>
  );
}

export default App;
