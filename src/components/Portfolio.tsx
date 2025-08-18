import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'IRCTC Website Reimagined',
      category: 'web App Design',
      description: 'A sustainability tracking app helping users monitor their environmental impact with beautiful data visualizations.',
      image: 'photo.png',
      tags: ['Mobile', 'iOS', 'Android', 'Sustainability'],
      color: 'from-green-400 to-emerald-600',
      link: 'https://www.behance.net/meerakarthika26'
    },
    {
      id: 2,
      title: 'FinanceFlow Dashboard',
      category: 'Web App Design',
      description: 'A comprehensive financial dashboard for small businesses with intuitive data visualization and reporting tools.',
      image: 'https://images.pexels.com/photos/7688678/pexels-photo-7688678.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      tags: ['Web', 'Dashboard', 'Finance', 'SaaS'],
      color: 'from-blue-400 to-purple-600',
      link: ''
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my design process and problem-solving skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`}>
                    <ExternalLink className="text-white" size={32} />
                  </div>
                </a>
              </div>
              
              <div className="p-6">
                <span className="text-sm text-purple-600 font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200 group"
                >
                  View Project 
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;