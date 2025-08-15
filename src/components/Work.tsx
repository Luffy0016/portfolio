import React from 'react';
import { ArrowRight } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: '',
      category: '',
      image: ': '
    },
    {
      title: '',
      category: '',
      image: ''
    },
    {
      title: '',
      category: '',
      image: ''
    },
    {
      title: '',
      category: '',
      image: ''
    },
    {
      title: '',
      category: '',
      image: ''
    },
    {
      title: '',
      category: '',
      image: ''
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-8 leading-tight">
            Work
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-2xl">
            A selection of projects that showcase my  design & coding expertise and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-stagger-children">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer animate-fade-in-up hover:scale-105 transition-all duration-500" style={{animationDelay: `${index * 150}ms`}}>
              <div className="aspect-[4/3] bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden mb-4 shadow-2xl group-hover:shadow-white/10 group-hover:border-white/20 transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-light text-white group-hover:text-gray-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 font-light">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up animation-delay-800">
          <button className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 text-lg font-light shadow-2xl hover:shadow-white/10">
            See my other projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
