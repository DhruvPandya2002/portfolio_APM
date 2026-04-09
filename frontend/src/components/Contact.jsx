import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { trackContactClick } from '../utils/analytics';

const Contact = () => {
  const handleEmailClick = (e) => {
    console.log('📧 Email clicked - tracking...');
    trackContactClick('Email');
    // Allow default mailto: behavior
  };

  const handleLinkedInClick = (e) => {
    console.log('🔗 LinkedIn clicked - tracking...');
    trackContactClick('LinkedIn');
    // Allow navigation
  };

  return (
    <section id="contact" className="py-20 bg-[#0F0F0F] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-yellow-400">Connect</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Aiming for product roles, consulting opportunities, and interesting collaborations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8">
                  Whether you're looking for a product operations specialist, want to discuss a project, or just want to chat about product and growth — I'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                <a
                  href="mailto:dhruvpandya2002@gmail.com"
                  onClick={handleEmailClick}
                  className="flex items-center gap-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-400 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-400 rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,107,53,1)] group-hover:shadow-[6px_6px_0px_0px_rgba(255,107,53,1)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all flex-shrink-0">
                    <Mail className="w-6 h-6 md:w-8 md:h-8 text-black" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-gray-400 font-semibold mb-1">EMAIL</p>
                    <p className="text-white font-medium text-sm md:text-lg truncate">dhruvpandya2002@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/dhruvpandya2002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkedInClick}
                  className="flex items-center gap-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-400 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-400 rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(168,85,247,1)] group-hover:shadow-[6px_6px_0px_0px_rgba(168,85,247,1)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all flex-shrink-0">
                    <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-gray-400 font-semibold mb-1">LINKEDIN</p>
                    <p className="text-white font-medium text-sm md:text-lg">dhruvpandya2002</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;