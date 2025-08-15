import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web & Mobile',
      description: 'Responsive websites and mobile app interfaces that work seamlessly across all devices.'
    },
    {
      title: 'UI & UX',
      description: 'User-centered design and intuitive experiences that delight and convert.'
    },
    {
      title: 'Branding',
      description: 'Visual identity and brand system design that tells your story effectively.'
    },
    {
      title: 'Front-End Development',
      description: 'Bringing designs to life with clean, efficient, and maintainable code.'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-8 leading-tight">
            Things I can help you with
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 animate-stagger-children">
          {services.map((service, index) => (
            <div key={index} className="space-y-4 animate-fade-in-up hover:scale-105 transition-all duration-300 p-6 rounded-xl hover:bg-white/5 hover:backdrop-blur-xl hover:border hover:border-white/10" style={{animationDelay: `${index * 200}ms`}}>
              <h3 className="text-2xl font-light text-white">
                {service.title}
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;