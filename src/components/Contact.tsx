import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess('');
        setError('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const contactTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
    const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTOREPLY;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !contactTemplateID || !autoReplyTemplateID || !publicKey) {
      setError('Email service is not configured. Please contact support.');
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'mahadevr385@gmail.com',  
    };

    try {
       
      await emailjs.send(serviceID, contactTemplateID, templateParams, publicKey);
      
       
      await emailjs.send(serviceID, autoReplyTemplateID, templateParams, publicKey);

      setSuccess('Message sent successfully! Check your inbox for a confirmation.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Email sending error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
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

  const ContactInfoItem = ({ item }: { item: typeof contactInfo[0] }) => {
    const commonClasses = `flex items-center p-4 rounded-lg transition-colors duration-200`;
    const themeClasses = isDark ? 'text-gray-300' : 'text-gray-600';
    const hoverClasses = item.href ? (isDark ? 'hover:bg-gray-800 hover:text-white' : 'hover:bg-white hover:text-gray-900') : '';

    const content = (
      <>
        <div className={`p-2 rounded-full mr-4 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
          <item.icon className="w-5 h-5 text-purple-500" />
        </div>
        <div>
          <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.label}</div>
          <div className="font-medium">{item.value}</div>
        </div>
      </>
    );

    if (item.href) {
      return (
        <a href={item.href} className={`${commonClasses} ${themeClasses} ${hoverClasses}`}>
          {content}
        </a>
      );
    }
    
    return <div className={`${commonClasses} ${themeClasses}`}>{content}</div>;
  };

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Let's Work Together</h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
           
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'} shadow-xl`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                  <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                  <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Subject</label>
                <input id="subject" type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project inquiry" required className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell me about your project..." required className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
              </div>

              <button type="submit" disabled={loading} className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${isDark ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white' : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'}`}>
                <span className="flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  {loading ? 'Sending...' : 'Send Message'}
                </span>
              </button>

              {success && <p className="mt-4 text-center font-medium text-green-500">{success}</p>}
              {error && <p className="mt-4 text-center font-medium text-red-500">{error}</p>}
            </form>
          </div>

         
          <div className="space-y-8">
            <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'} shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => <ContactInfoItem key={index} item={item} />)}
              </div>
            </div>

            <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'} shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`} title={social.label}>
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
