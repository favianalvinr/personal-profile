import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function ContactSection() {
  return (
    <section className="bg-gradient-to-br from-purple-100 via-pink-100 to-white rounded-xl shadow-xl px-6 py-10 md:px-10 md:py-14">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        
        {/* Contact Info */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#23394B]">Contact Me</h2>
          <p className="text-sm sm:text-base text-[#5A6778] max-w-md">
            Interested working together? Let's talk about your project and make something amazing!
          </p>
          <div className="text-sm text-[#23394B] space-y-2">
            <p className="flex items-center gap-2"><FaEnvelope className="text-[#7755FF]" /><span className="text-[#7755FF]">favian.23008@mhs.unesa.ac.id</span></p>
            <p className="flex items-center gap-2"><FaPhone className="text-[#7755FF]" /><span className="text-[#7755FF]">+62 812-3019-9267</span></p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-6 text-[#7755FF] text-lg">
            <FaInstagram className="hover:opacity-70 cursor-pointer" style={{ color: "#FF54B0" }}/>
            <FaGithub className="hover:opacity-70 cursor-pointer" style={{ color: "#232946" }}/>
            <FaLinkedin className="hover:opacity-70 cursor-pointer" style={{ color: "#0077B5" }}/>
            <FaEnvelope className="hover:opacity-70 cursor-pointer" style={{ color: "#7755FF" }}/>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 w-full">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7755FF]"
            />
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7755FF]"
            />
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7755FF]"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;