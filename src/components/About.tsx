import React from 'react';
import { User, Award, Coffee, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { isDark } = useTheme();

  const stats = [
    { icon: Award, label: 'Projects Completed', value: '50+' },
    { icon: User, label: 'Happy Clients', value: '30+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
    { icon: Heart, label: 'Passion Level', value: '100%' },
  ];

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm a passionate UI/UX designer with over 5 years of experience creating digital experiences 
            that users love and businesses need.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className={`p-8 rounded-2xl ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                My Design Philosophy
              </h3>
              <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I believe great design is invisible. It should feel natural, intuitive, and effortless. 
                My approach combines user research, creative thinking, and technical expertise to create 
                solutions that not only look beautiful but solve real problems.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      User-Centered Design
                    </h4>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                      Every decision is made with the user in mind, backed by research and testing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Iterative Process
                    </h4>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                      Continuous improvement through feedback, testing, and refinement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className={`w-full h-96 rounded-2xl ${
                isDark ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-purple-100 to-cyan-100'
              } flex items-center justify-center`}>
                <div className={`text-6xl ${isDark ? 'text-gray-600' : 'text-gray-300'}`}>
                  👨‍💻
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-30 animate-bounce-slow"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${
                  isDark ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <stat.icon className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;