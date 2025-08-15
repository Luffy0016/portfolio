import React from 'react';

const About = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column - Image placeholder */}
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <div className="aspect-square bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-105 hover:bg-white/10 transition-all duration-500">
              <div className="text-6xl font-light text-white/60">SAN</div>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="order-1 lg:order-2 space-y-8 animate-fade-in-right">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                About
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light animate-stagger-children">
                <p className="animate-fade-in-up">
                  A passionate product designer with 13+ years of expertise translating ideas into intuitive, beautiful designs.
                </p>
                <p className="animate-fade-in-up animation-delay-200">
                  I believe great design is about more than aesthetics—it's about creating meaningful experiences that solve real problems.
                </p>
                <p className="animate-fade-in-up animation-delay-400">
                  My approach combines user-centered thinking with visual storytelling to deliver designs that not only look stunning but also drive results.
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 animate-fade-in-up animation-delay-600">
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-light text-white mb-2">13+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-light text-white mb-2">200+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;