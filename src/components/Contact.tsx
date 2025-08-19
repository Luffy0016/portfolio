import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_z4vyo9e',       // Service ID
        'template_7n00iw8',      // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'mahadevr385@gmail.com'  // Add recipient email here
        },
        'Rp0B6L0ss0B6nkKKH'      // Public Key
      );
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setLoading(false);
      console.error('Email sending error:', err);
      alert('Failed to send message. Please try again.');
    }
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
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Let's Work Together</h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind or just want to chat about design? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'} shadow-xl`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className={`w-full px-4 py-3 rounded-lg border ${
                  isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message"
                required
                className={`w-full px-4 py-3 rounded-lg border ${
                  isDark ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 px-6 rounded-lg font-semibold ${
                  isDark ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white' : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {success && <p className={`mt-4 text-center ${isDark ? 'text-green-400' : 'text-green-600'}`}>Message sent successfully! ✅</p>}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'} shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h3>
              {contactInfo.map((item, i) => (
                <a key={i} href={item.href} className="flex items-center mb-4">
                  <item.icon className="w-5 h-5 mr-3 text-purple-500" />
                  <span>{item.value}</span>
                </a>
              ))}
            </div>

            <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'} shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300" title={social.label}>
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
