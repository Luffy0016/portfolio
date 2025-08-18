import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(true); // default to dark

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(true); // force dark as default if nothing saved
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          isDark ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
