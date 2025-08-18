import React, { useEffect, useState } from 'react';
import { Award, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { isDark } = useTheme();
  const [inView, setInView] = useState(false);

  const stats = [
    { icon: Award, label: 'Projects Completed', value: 12 },
    { icon: Star, label: 'Years of Experience', value: 2 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const Counter = ({ target }: { target: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!inView) return;

      let start = 0;
      const duration = 1000; // 1 second
      const stepTime = Math.max(Math.floor(duration / target), 20);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= target) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }, [inView, target]);

    return <span>{count}+</span>;
  };

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            I’m R. Mahadev, a creative frontend developer and designer passionate about building clean,
            modern, and user-friendly digital experiences.
          </p>
        </div>

        <div
          className={`flex flex-col lg:flex-row items-center justify-between p-12 rounded-2xl ${
            isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          } shadow-2xl mb-16`}
        >
          <div className="lg:w-2/3">
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              My Design Philosophy
            </h3>
            <p className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              For me, design isn’t just about visuals – it’s about creating seamless experiences where technology
              feels natural and intuitive. A good design makes users feel comfortable, confident, and engaged
              without even realizing it.
            </p>
            <p className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              I believe in minimalism: clarity over clutter, function over noise. Every button, every layout,
              every transition has to serve a purpose. This approach not only ensures usability but also creates
              a lasting impression on users.
            </p>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Whether I’m building responsive websites, crafting UI/UX flows, or experimenting with new frameworks,
              my goal is to merge creativity and logic—designing experiences that look modern and feel effortless.
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center justify-center lg:pr-8 mt-10 lg:mt-0">
            <div
              className={`w-72 h-72 rounded-full flex items-center justify-center text-6xl font-bold transition-transform transform hover:scale-105 hover:shadow-2xl ${
                isDark
                  ? 'bg-gray-700 text-white hover:shadow-purple-700/40'
                  : 'bg-gray-200 text-gray-800 hover:shadow-purple-300/40'
              }`}
            >
              RM
            </div>
          </div>
        </div>

        <div id="stats-section" className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              } shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <stat.icon className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <Counter target={stat.value} />
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
