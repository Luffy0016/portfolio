import React from 'react';
import { ArrowDown, Palette, Sparkles, Play, Zap, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { isDark } = useTheme();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {isDark ? (
         
          <>
           
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"></div>
              <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse delay-1000"></div>
              <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse delay-500"></div>
              <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse delay-1500"></div>
            </div>
            
           
            <div className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-400/50 rotate-45 animate-spin-slow glow-cyan"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full animate-pulse glow-purple"></div>
            <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-pink-400/60 animate-bounce-slow glow-pink"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-tr from-cyan-600/20 to-purple-500/20 rotate-12 animate-float glow-multi"></div>
            <div className="absolute top-60 left-1/4 w-8 h-8 bg-cyan-400/40 rounded-full animate-ping glow-cyan"></div>
            
            
            <div className="absolute top-32 right-1/4 w-32 h-32 border border-purple-400/30 rounded-full animate-spin-reverse glow-purple"></div>
            <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 transform rotate-45 animate-float-reverse"></div>
          </>
        ) : (
         
          <>
           
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 rounded-full animate-morph opacity-60 blur-sm"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-200 via-blue-200 to-purple-200 rounded-full animate-float-organic opacity-50 blur-sm"></div>
            <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 rounded-full animate-pulse-organic opacity-40 blur-sm"></div>
            <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-br from-green-200 via-teal-200 to-cyan-200 rounded-full animate-drift opacity-30 blur-sm"></div>
            <div className="absolute top-60 left-1/4 w-28 h-28 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-full animate-wobble opacity-50 blur-sm"></div>
            
            
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-particle-1"></div>
            <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-particle-2"></div>
            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-particle-3"></div>
          </>
        )}
      </div>

      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          
          <div className="flex justify-center mb-6">
            <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium backdrop-blur-md border transition-all duration-500 hover:scale-110 ${
              isDark 
                ? 'bg-gray-900/30 text-cyan-300 border-cyan-400/30 glow-cyan-soft' 
                : 'bg-white/30 text-purple-700 border-purple-300/50 shadow-lg'
            } animate-float-badge`}>
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              Hi,I'm Mahadev
              <Star className="w-4 h-4 ml-2 animate-spin-slow" />
            </div>
          </div>

         
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="block animate-slide-in-left">Crafting</span>
            <span className={`block bg-gradient-to-r animate-text-shimmer ${
              isDark 
                ? 'from-cyan-400 via-purple-400 via-pink-400 to-cyan-400' 
                : 'from-purple-600 via-pink-600 via-orange-500 to-purple-600'
            } bg-clip-text text-transparent bg-300% animate-slide-in-right`}>
              Digital Experiences
            </span>
          </h1>

          
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up-delay ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Where innovation meets intuition. I transform complex challenges into 
            <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-purple-600'}`}> beautiful</span>, 
            <span className={`font-semibold ${isDark ? 'text-purple-400' : 'text-pink-600'}`}> functional</span> digital experiences.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className={`group relative px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 overflow-hidden ${
              isDark
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-2xl hover:shadow-cyan-500/50 glow-button-dark'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:shadow-purple-500/50'
            } animate-pulse-button`}>
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></span>
              <span className="flex items-center">
                <Play className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform duration-300" />
                Explore My Universe
              </span>
            </button>

            <button className={`group px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-500 hover:scale-110 backdrop-blur-sm ${
              isDark
                ? 'border-cyan-400/50 text-cyan-300 hover:border-cyan-400 hover:text-white hover:bg-cyan-400/10'
                : 'border-purple-400/50 text-purple-700 hover:border-purple-500 hover:text-purple-900 hover:bg-purple-100/50'
            } animate-border-glow`}>
              <span className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin transition-transform duration-300" />
                Let's Connect
              </span>
            </button>
          </div>
        </div>
      </div>

      
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full transition-all duration-300 hover:scale-125 ${
          isDark 
            ? 'text-cyan-400 hover:text-white bg-gray-900/30 backdrop-blur-sm border border-cyan-400/30 glow-cyan-soft' 
            : 'text-purple-500 hover:text-purple-700 bg-white/30 backdrop-blur-sm border border-purple-300/50 shadow-lg'
        } animate-bounce-custom`}
      >
        <ArrowDown className="w-6 h-6 animate-pulse" />
      </button>
    </section>
  );
};

export default Hero;