import React from 'react';
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-8 leading-tight">
            Let's create something amazing together
          </h2>
          <p className="text-lg text-gray-400 mb-12 font-light leading-relaxed animate-fade-in-up animation-delay-200">
            Ready to bring your vision to life? I'd love to hear about your project and discuss how we can make it extraordinary.
          </p>
          
          <div className="flex justify-center gap-6 mb-12 animate-fade-in-up animation-delay-400">
            <a href="mailto:mahadevr385@gmail.com" className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group shadow-2xl hover:shadow-white/10">
              <Mail className="w-5 h-5 text-gray-300 group-hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/r-mahadev" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group shadow-2xl hover:shadow-white/10">
              <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com/_r_mahadev_" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group shadow-2xl hover:shadow-white/10">
              <Instagram className="w-5 h-5 text-gray-300 group-hover:text-pink-600 transition-colors duration-300" />
            </a>
            <a href="https://github.com/Luffy0016" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group shadow-2xl hover:shadow-white/10">
              <Github className="w-5 h-5 text-gray-300 group-hover:text-slate-800 transition-colors duration-300" />
            </a>
          </div>
          
          <div className="border-t border-white/10 pt-8 animate-fade-in-up animation-delay-600">
            <p className="text-sm text-gray-500 font-light">
              © 2025 R.Mahadev. Crafted with passion and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
