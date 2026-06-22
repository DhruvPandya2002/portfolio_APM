import React from 'react';
import { Card } from './ui/card';
import { User, Target, Zap, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              About <span className="text-yellow-400">Me</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Profile Image */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-[8px_8px_0px_0px_rgba(255,107,53,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,107,53,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300">
                  <img 
                    src="/dhruv-photo.jpg" 
                    alt="Dhruv Lalit Pandya - Product Operations @ CRED" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-400 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hidden md:block"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hidden md:block"></div>
              </div>
            </div>

            {/* Main About Content */}
            <div className="lg:col-span-3">
              <Card className="p-6 md:p-8 border-2 border-gray-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(255,211,0,0.3)] hover:border-yellow-400 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,107,53,1)] flex-shrink-0">
                    <User className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Dhruv Lalit Pandya</h3>
                    <p className="text-base md:text-lg text-gray-600 font-medium">Product Operations @ CRED</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-base md:text-lg">
                    I'm a product operations specialist who thrives at the intersection of <span className="font-semibold text-black">data, user insight, and execution</span>. My work focuses on building systems that don't just work—they scale, adapt, and drive measurable outcomes.
                  </p>
                  
                  <p className="text-base md:text-lg">
                    At CRED, I've shipped <span className="font-semibold text-yellow-600">20+ campaigns</span> impacting <span className="font-semibold text-yellow-600">9M+ users</span>, achieved <span className="font-semibold text-yellow-600">+11.3% user activation</span>, cut monthly campaign burn by <span className="font-semibold text-yellow-600">45%</span> (₹2.7 Cr → ₹1.5 Cr), and built AI-powered internal tools that cut operational time by <span className="font-semibold text-yellow-600">75%</span>.
                  </p>

                  <p className="text-base md:text-lg">
                    Before CRED, I built products from the ground up—from EdTech platforms to cloud infrastructure—learning early that the best products emerge from deep user understanding, rapid iteration, and ruthless prioritization.
                  </p>

                  <p className="text-base md:text-lg">
                    I believe in <span className="font-semibold text-black">shipping fast, learning faster</span>, and letting data tell the story. Whether it's A/B testing campaign strategies, debugging reward logic, or automating repetitive workflows with LLMs—I'm always looking for leverage points that move the needle.
                  </p>
                </div>
              </Card>
            </div>

            {/* What Drives Me Cards */}
            <div className="lg:col-span-5 grid md:grid-cols-3 gap-6 mt-8">
              <Card className="p-6 border-2 border-purple-200 bg-purple-50 shadow-[4px_4px_0px_0px_rgba(168,85,247,0.3)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-black">What Drives Me</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Solving ambiguous problems where user insight meets operational efficiency. I love taking messy, unclear challenges and turning them into clean, scalable systems.
                </p>
              </Card>

              <Card className="p-6 border-2 border-orange-200 bg-orange-50 shadow-[4px_4px_0px_0px_rgba(255,107,53,0.3)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-black">My Approach</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Bias toward action. Measure everything. Ship iteratively. I'd rather launch and learn than wait for perfect—because perfect doesn't exist in product.
                </p>
              </Card>

              <Card className="p-6 border-2 border-green-200 bg-green-50 shadow-[4px_4px_0px_0px_rgba(34,197,94,0.3)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-black">Looking Ahead</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Aiming for APM roles where I can own 0→1 product development, work closely with engineering and design, and solve complex user problems at scale.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
