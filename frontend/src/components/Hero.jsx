import React from 'react';
import { Button } from './ui/button';

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
          {/* Main Message */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight max-w-5xl mx-auto">
            Building <span className="text-yellow-400">0→1 products</span>
            <br />
            that scale
            <br />
            <span className="text-yellow-400">real impact</span>
          </h1>
          
          {/* Name & Tagline */}
          <p className="text-2xl md:text-3xl font-bold text-white mb-6">
            DHRUV LALIT PANDYA
          </p>
          <div className="mb-10">
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Turning data into decisions. Building systems that scale.
            </p>
            <p className="text-lg md:text-xl text-yellow-400 font-semibold">
              Shipped 20+ campaigns | Impacted 9M+ users
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 justify-center items-center">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;