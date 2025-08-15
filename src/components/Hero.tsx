import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-6xl lg:text-8xl xl:text-9xl font-light text-white mb-8 leading-none tracking-tight animate-fade-in-up">
          Sajan Shrestha
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-gray-300 mb-12 font-light animate-fade-in-up animation-delay-200">
          Creative Visual Designer
        </p>
        
        {/* Description */}
        <div className="max-w-3xl mx-auto mb-16 animate-fade-in-up animation-delay-400">
          <p className="text-lg lg:text-xl text-gray-400 leading-relaxed font-light">
            I create unconventional yet functional & visually pleasing interfaces for mobile and web.
          </p>
        </div>
        
        {/* CTA Button */}
        <button className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 text-lg font-medium shadow-2xl animate-fade-in-up animation-delay-600 hover:shadow-white/10">
          Let's work together
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;