import React from 'react';
import ProfileCard from '../components/ProfileCard';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';

function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <ProfileCard />
      </div>
      <div className="lg:col-span-2 space-y-6">
        <AboutSection />
        <SkillsSection />
        {/* Tambahkan section lain jika ada di desain: experience, education, projects */}
      </div>
    </main>
  );
}

export default Home;
