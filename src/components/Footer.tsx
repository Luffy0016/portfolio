import React from 'react';
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            Let's Create Something Amazing Together
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project and discuss how we can make it extraordinary.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <button className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <Mail className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
            </button>
            <button className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
            </button>
            <button className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <Instagram className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-colors duration-300" />
            </button>
            <button className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <Github className="w-5 h-5 text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
            </button>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <p className="text-slate-500">
              © 2025 R.Mahadev. Crafted with passion and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

