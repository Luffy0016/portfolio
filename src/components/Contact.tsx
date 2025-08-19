import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'mahadevr385@gmail.com', href: 'mailto:mahadevr385@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 6238040266', href: 'tel:+916238040266' },
    { icon: MapPin, label: 'Location', value: 'India, Kerala' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Luffy0016' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/r-mahadev/' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/_r_mahadev_/' },
  ];

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Let's Work Together
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind or just want to chat about design? I'd love to hear from you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
         
          <div className={`p-8 rounded-2xl ${
            isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          } shadow-xl`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${
                    isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isDark
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:shadow-xl hover:shadow-purple-500/25'
                    : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-xl hover:shadow-purple-600/25'
                }`}
              >
                <span className="flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  {loading ? 'Sending...' : 'Send Message'}
                </span>
              </button>

              {success && (
                <p className={`mt-4 text-center font-medium ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                  Message sent successfully! ✅
                </p>
              )}
            </form>
          </div>

         
          <div className="space-y-8">
            <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'} shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a key={index} href={item.href} className={`flex items-center p-4 rounded-lg transition-colors duration-200 ${isDark ? 'hover:bg-gray-800 text-gray-300 hover:text-white' : 'hover:bg-white text-gray-600 hover:text-gray-900'}`}>
                    <div className={`p-2 rounded-full mr-4 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <item.icon className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'} shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'}`} title={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
