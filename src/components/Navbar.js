import React from 'react';
import { FaArrowRight, FaPaperPlane } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MyProfile</h1>
      <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
        <a href="AboutSection.js" className="text-black">About</a>
        <a href="SkillsSection.js" className="text-black">Skills</a>
        <a href="PortfolioSection.js" className="text-black">Portfolio</a>
        <a href="ContactSection.js" className="text-black">Contact</a>
      </nav>
      <button className="bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition">
        <FaPaperPlane />Hire Me <FaArrowRight />
      </button>
    </header>
  );
};

export default Navbar;