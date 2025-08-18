import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Merra Karthika
            </div>
            <p className="text-gray-400 leading-relaxed">
              UI/UX Designer passionate about creating beautiful and functional digital experiences 
              that solve real-world problems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-gray-400">
              <div>UI/UX Design</div>
              <div>Mobile App Design</div>
              <div>Web Design</div>
              <div>Design Systems</div>
              <div>User Research</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 Meera Karthika. All rights reserved.
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;