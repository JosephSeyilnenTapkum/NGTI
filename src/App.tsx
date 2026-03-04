import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import WhySection from './sections/WhySection';
import ProgramsSection from './sections/ProgramsSection';
import CampusSection from './sections/CampusSection';
import InnovationSection from './sections/InnovationSection';
import MentorshipSection from './sections/MentorshipSection';
import ProjectsSection from './sections/ProjectsSection';
import AdmissionsSection from './sections/AdmissionsSection';
import EventsSection from './sections/EventsSection';
import ContactSection from './sections/ContactSection';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize scroll animations after components mount
    const ctx = gsap.context(() => {
      // Refresh ScrollTrigger after all content loads
      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-cloud">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <WhySection />
        <ProgramsSection />
        <CampusSection />
        <InnovationSection />
        <MentorshipSection />
        <ProjectsSection />
        <AdmissionsSection />
        <EventsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
