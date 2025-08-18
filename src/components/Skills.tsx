import React from 'react';
import { Palette, Code, Smartphone, Users, Lightbulb, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Skills: React.FC = () => {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      title: 'Design Tools',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Adobe XD', level: 90 },
        { name: 'Sketch', level: 85 },
        { name: 'Photoshop', level: 88 },
        { name: 'Illustrator', level: 82 }
      ]
    },
    {
      title: 'Development',
      icon: Code,
      skills: [
        { name: 'HTML/CSS', level: 92 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Vue.js', level: 75 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'UX Research',
      icon: Users,
      skills: [
        { name: 'User Interviews', level: 90 },
        { name: 'Usability Testing', level: 88 },
        { name: 'A/B Testing', level: 85 },
        { name: 'Analytics', level: 82 },
        { name: 'Wireframing', level: 95 }
      ]
    }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Creative Thinking', icon: Zap },
    { name: 'Communication', icon: Users },
    { name: 'Mobile Design', icon: Smartphone }
  ];

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Skills & Expertise
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            A comprehensive toolkit built through years of experience and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`p-8 rounded-2xl ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-xl hover:shadow-2xl transition-shadow duration-300`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full mr-4 ${
                  isDark ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <category.icon className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animation: `growWidth 2s ease-out ${skillIndex * 0.2}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className={`p-8 rounded-2xl ${
          isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        } shadow-xl`}>
          <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    isDark ? 'bg-gray-600' : 'bg-white'
                  }`}>
                    <skill.icon className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
                <h4 className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;