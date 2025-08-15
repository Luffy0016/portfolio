import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-xl border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-6">
            Let's Create Something Amazing Together
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project and discuss how we can make it extraordinary.
          </p>

          {/* Social Buttons */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:mahadevr385@gmail.com"
              className="w-12 h-12 bg-white/20 backdrop-blur-md shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <Mail className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/r-mahadev/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-md shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <Linkedin className="w-5 h-5 text-white group-hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-md shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <Twitter className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/Luffy0016"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-md shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <Github className="w-5 h-5 text-white group-hover:text-gray-300 transition-colors duration-300" />
            </a>
          </div>

          {/* Footer Text */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-400">
              © 2025 R.Mahadev. Crafted with passion and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

 
