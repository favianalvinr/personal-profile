import React from 'react';
import profile from '../assets/image/profile.png';
import { FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

function ProfileCard() {
  return (
     <div className="font-[Inter,sans-serif] min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#E0EAFE] to-[#F9E5FF]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-40">
          <div className="flex-1 text-center sm:text-left space-y-5">
            <p className="text-sm font-medium text-[#7755FF] tracking-wider">
              Hello, I'm
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#23394B] leading-tight">
              Creative Designer &
              <br />
              Frontend Developer
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#6A7280] max-w-lg mx-auto md:mx-0">
              Passionate in creating beautiful and functional digital experiences.
              I love blending creativity with technology to make impactful
              solutions for users and brands.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 pt-4">
              <button className="bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white px-7 py-3 rounded-full font-medium shadow-lg hover:opacity-90 transition transform hover:scale-105">
                See My Work
              </button>
              <button className="bg-white border border-[#7755FF] text-[#7755FF] px-7 py-3 rounded-full font-medium shadow-sm hover:bg-[#7755FF] hover:text-white transition">
                Contact Me
              </button>
            </div>

            <div className="flex justify-center sm:justify-start gap-6 pt-4 pl-6 text-xl">
              <FaInstagram className="text-[#FF54B0]" />
              <FaGithub className="text-[#232946]" />
              <FaLinkedin className="text-[#0077B5]" />
            </div>
          </div>

         
          <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 flex-shrink-0">
            <div className="absolute top-0 right-0 w-full h-full rounded-full bg-gradient-to-br from-[#E9D8FF] to-[#FF54B0] opacity-60"></div>
            <img
              src={profile}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full shadow-2xl"
            />
          </div>
        </div>
      
    </div>
  );
}

export default ProfileCard;
