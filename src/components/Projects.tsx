import React, { useState } from 'react';
import { ExternalLink, Eye, Zap, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects: React.FC = () => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Beyond Syllabus',
      description: ' BeyondSyllabus.in is an AI-powered platform that simplifies university syllabi with summaries, learning tasks, and real-world applications for easier study.',
      image: 'image1.png',
      category: 'web App',
      tags: ['Education', 'AI Learning', 'Study Tool'],
      year: '2025',
      link: 'https://beyondsyllabus.in'
    },
    {
      id: 2,
      title: 'Linkdin Profile Assist',
      description: ' A simple single-page app using HTML, JavaScript, and Tailwind CSS that leverages the Gemini API to quickly generate professional LinkedIn summaries from your skills and experience.version 2 in planning',
      image: 'image2.png',
      category: 'Web App',
      tags: ['Linkdin', 'Gemini API', 'Profile Summary'],
      year: '2025',
      link: ' https://luffy0016.github.io/LinkedIn-Profile-Assistant/'
    },
    {
      id: 3,
      title: 'Portfolio website ',
      description: 'The first portfolio website build in my 1st year with HTML,CSS&little bit of JS',
      image: 'image3.png',
      category: 'web',
      tags: ['portfolio', 'web', 'brand'],
      year: '2024',
      link: 'https://luffy0016.github.io/mahadev-portfolio.github.io/'
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Design' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'branding', label: 'Branding' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            My Projects
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            A collection of projects that showcase my design thinking process and attention to detail.
          </p>
        </div>

      
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? isDark 
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                  : isDark
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

      
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105 ${
                isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'
              } shadow-xl hover:shadow-2xl ${
                isDark ? 'hover:shadow-cyan-500/20' : 'hover:shadow-purple-500/20'
              }`}
            >
              <div className="relative overflow-hidden group-hover:scale-110 transition-transform duration-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDark 
                    ? 'from-gray-900/80 via-cyan-500/20 to-transparent' 
                    : 'from-black/60 via-purple-500/20 to-transparent'
                }`}></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                 
                  <span className={`p-2 backdrop-blur-sm rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                    isDark ? 'bg-purple-500/30' : 'bg-white/20'
                  }`}>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
                
             
                <div className="absolute inset-0 pointer-events-none">
                  <Star className={`absolute top-6 left-6 w-4 h-4 opacity-0 group-hover:opacity-60 transition-all duration-700 ${
                    isDark ? 'text-cyan-400' : 'text-purple-400'
                  } animate-spin-slow`} />
                  <Zap className={`absolute bottom-6 right-6 w-5 h-5 opacity-0 group-hover:opacity-60 transition-all duration-700 delay-200 ${
                    isDark ? 'text-purple-400' : 'text-pink-400'
                  } animate-pulse`} />
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-xl font-bold group-hover:scale-105 transition-transform duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    isDark ? 'text-cyan-400 bg-cyan-400/10' : 'text-purple-600 bg-purple-100'
                  }`}>
                    {project.year}
                  </span>
                </div>
                
                <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-xs rounded-full transition-all duration-300 hover:scale-110 ${
                        isDark 
                          ? 'bg-gray-800 text-gray-300 border border-gray-600 hover:border-cyan-400/50' 
                          : 'bg-white text-gray-600 border border-gray-300 hover:border-purple-400/50'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
