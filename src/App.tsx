import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';  
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setIsDark(savedTheme === 'dark');
    else setIsDark(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        className={`flex flex-col min-h-screen transition-colors duration-500 ${
          isDark ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <div className="flex-grow">
          <Header />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
        <Footer />  
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
