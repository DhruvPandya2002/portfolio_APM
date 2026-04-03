import React from 'react';
import { Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-3">
                DHRUV <span className="text-yellow-400">PANDYA</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Product Operations @ CRED
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Building systems that scale. Shipping products that matter.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-gray-400 mb-4">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#experience"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    Work Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-bold text-gray-400 mb-4">CONNECT</h4>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/dhruvpandya2002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="mailto:dhruvpandya2002@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {currentYear} Dhruv Lalit Pandya. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> and lot of product thinking
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;