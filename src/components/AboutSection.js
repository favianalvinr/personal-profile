import React from "react";
import profile from "../assets/image/profile.png";
import { FaPaperPlane } from "react-icons/fa";

function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl px-10 py-14
      flex flex-col md:flex-row gap-12 items-center md:items-start relative"
      >
        {/* Profile Image */}
        <div className="flex-shrink-0 relative">
          <img
            src={profile}
            alt="#"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-full bg-gradient-to-br from-[#E9D8FF] to-[#FF54B0]"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-5 text-center md:text-left">
          <h2 className="text-[#23394B] font-extrabold text-3xl leading-tight">
            About Me
          </h2>
          <p className="text-[#606A7A] text-[15px] md:text-base leading-6 max-w-lg mx-auto md:mx-0">
            Hi! I'm , a passionate designer and frontend developer based in
            Surabaya. With a background in visual design and a love for coding,
            I specialize in building websites and apps that are not only
            stunning but also user-friendly.
          </p>

          {/* Skill Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
            <span className="font-medium flex items-center gap-2 bg-[#F5F5FF] text-[#6A49FD] px-3 py-1 rounded-full text-xs border border-[#E2E2FF] shadow-sm">
              ✓ UI/UX Design
            </span>

            <span className="font-medium flex items-center gap-2 bg-[#F5F5FF] text-[#6A49FD] px-3 py-1 rounded-full text-xs border border-[#E2E2FF] shadow-sm">
              ✓ Web Development
            </span>

            <span className="font-medium flex items-center gap-2 bg-[#F5F5FF] text-[#6A49FD] px-3 py-1 rounded-full text-xs border border-[#E2E2FF] shadow-sm">
              ✓ Branding
            </span>

            <span className="font-medium flex items-center gap-2 bg-[#F5F5FF] text-[#6A49FD] px-3 py-1 rounded-full text-xs border border-[#E2E2FF] shadow-sm">
              ✓ Motion Graphics
            </span>
          </div>

          {/* Connect Button */}
          <div className="pt-3">
            <button
              className="flex items-center justify-center gap-2 bg-gradient-to-r 
            from-[#7755FF] to-[#FF54B0] text-white font-semibold px-7 py-2.5 
            rounded-full shadow-md hover:opacity-90 transition mx-auto md:mx-0 text-sm"
            >
              <FaPaperPlane size={15} />
              Let’s Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
