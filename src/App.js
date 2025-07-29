import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import AdditionalInfo from './components/AdditionalInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NeuralCursor from './components/NeuralCursor'; 
// --- NEW: Import the background component ---
import AnimatedBackground from './components/AnimatedBackground'; 

function App() {
  return (
    <div className="App">
      {/* --- NEW: Place the background here, first in the list --- */}
      <AnimatedBackground />

      <NeuralCursor />
      <Header />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <AdditionalInfo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;