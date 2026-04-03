import React from 'react';
import { Button } from './ui/button';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-[#0F0F0F] text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Role badge */}
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-yellow-400 text-black font-bold text-sm tracking-wider rounded-md shadow-[4px_4px_0px_0px_rgba(255,107,53,1)]">
              PRODUCT OPERATIONS @ CRED
            </span>
          </div>
          
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            DHRUV LALIT
            <br />
            <span className="text-yellow-400">PANDYA</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Turning data into decisions. Building systems that scale.
            <br />
            <span className="text-yellow-400 font-semibold">Shipped 20+ campaigns | Impacted 9M+ users</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 justify-center items-center mb-12">
            <button
              onClick={scrollToWork}
              className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-lg shadow-[6px_6px_0px_0px_rgba(255,107,53,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,107,53,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Quick Links */}
          <div className="flex gap-6 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/dhruvpandya2002/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="mailto:dhruvpandya2002@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email</span>
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;