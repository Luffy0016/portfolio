import React from 'react';
import { ArrowDown } from 'lucide-react'; // Added ArrowDown import

const About = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
           
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <div className="aspect-square bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-105 hover:bg-white/10 transition-all duration-500">
              <div className="text-6xl font-light text-white/60">MAHADEV</div>
            </div>
          </div>
          

          <div className="order-1 lg:order-2 space-y-8 animate-fade-in-right">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                About
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light animate-stagger-children">
                <p className="animate-fade-in-up">
                  A passionate UI/UX designer & Frontend Developer with 2+ years of expertise translating ideas into intuitive, beautiful designs.
                </p>
                <p className="animate-fade-in-up animation-delay-200">
                  I believe great design is about more than aesthetics—it's about creating meaningful experiences that solve real problems.
                </p>
                <p className="animate-fade-in-up animation-delay-400">
                  My approach combines user-centered thinking with visual storytelling to deliver designs that not only look stunning but also drive results.
                </p>
              </div>
            </div>
            
            {/* Download CV Button added here */}
            <a 
              href="/R.Mahadev-CV.pdf" // Update this path to your CV file
              download
              className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 text-lg font-medium shadow-2xl hover:shadow-white/10 mt-8"
            >
              Download CV
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
