import React from 'react';

const About = () => {
  const profilePic = "";

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Passionate about creating meaningful experiences
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I’m a creative UI/UX designer who loves turning ideas into engaging, user-friendly
              experiences. My approach blends research-driven design with clean, modern visuals
              to bring digital products to life.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I believe design should feel natural and intuitive. Whether it’s a website, mobile app,
              or digital tool, I focus on simplicity, accessibility, and impact to create designs
              people enjoy using.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Miro'].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            {profilePic ? (
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg border-4 border-purple-500 hover:scale-105 transition-transform duration-300">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full flex items-center justify-center bg-white text-5xl font-bold shadow-lg border-4 border-purple-500 hover:scale-105 transition-transform duration-300">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  MK
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
