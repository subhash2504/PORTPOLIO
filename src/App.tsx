import { useState } from 'react';
import Background3DCanvas from './components/Background3DCanvas';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import AIJourney from './components/AIJourney';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="noise-overlay relative min-h-screen bg-surface-950 text-surface-200 overflow-x-hidden">
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Global 3D WebGL Background Canvas */}
      <Background3DCanvas />

      {/* Neural Network Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section with Interactive 3D Scene */}
        <Hero />

        {/* Decorative Separator */}
        <div className="glow-line mx-auto max-w-5xl" />

        {/* Features / Capabilities Section */}
        <Features />

        {/* About Section */}
        <About />

        {/* AI Engineering Journey */}
        <AIJourney />

        {/* Decorative Separator */}
        <div className="glow-line mx-auto max-w-5xl" />

        {/* Skills Section with 3D Tech Orbit */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Decorative Separator */}
        <div className="glow-line mx-auto max-w-5xl" />

        {/* Featured Projects */}
        <Projects />

        {/* Achievements */}
        <Achievements />

        {/* Testimonials & Endorsements */}
        <Testimonials />

        {/* Decorative Separator */}
        <div className="glow-line mx-auto max-w-5xl" />

        {/* Education */}
        <Education />

        {/* Certifications */}
        <Certifications />

        {/* Resume CTA */}
        <Resume />

        {/* Decorative Separator */}
        <div className="glow-line mx-auto max-w-5xl" />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
