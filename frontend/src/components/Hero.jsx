import React from 'react';
import { Button } from './ui/button';
import { trackButtonClick } from '../utils/analytics';

const Hero = () => {
  const scrollToContact = () => {
    trackButtonClick('Get In Touch', { location: 'Hero Section' });
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    trackButtonClick('View My Work', { location: 'Hero Section' });
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-[#0F0F0F] text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Message */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Building <span className="text-yellow-400">0→1 products</span> that scale <span className="text-yellow-400">real impact</span>
          </h1>
          
          {/* Tagline */}
          <div className="mb-10 space-y-3">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Turning data into decisions. Building systems that scale.
            </p>
            <p className="text-sm md:text-base text-yellow-400 font-medium">
              20+ campaigns shipped | 9M+ users | +11.3% activation | 45% burn reduction
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