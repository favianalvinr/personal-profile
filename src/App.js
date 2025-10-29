import React from 'react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard'; 
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <ProfileCard /> 
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;