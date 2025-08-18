import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'meerakarthika021@gmail.com',
      link: 'mailto:meerakarthika021@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '9778109547',
      link: 'tel:+919778109547'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      details: 'India, Kerala',
      link: '#'
    }
  ];

  const socialLinks = [
    { 
      icon: <Linkedin size={20} />, 
      name: 'LinkedIn', 
      link: 'https://www.linkedin.com/in/meera-karthika' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M4.5 4h7.6c1.2 0 2.2.1 3 .4.7.3 1.3.7 1.7 1.2.4.5.6 1.2.6 1.9 0 .9-.3 1.6-.9 2.2-.3.3-.7.5-1.1.6.6.2 1 .4 1.4.7.8.6 1.2 1.5 1.2 2.7 0 .8-.2 1.6-.6 2.2-.4.6-1 1.1-1.8 1.4-.8.4-1.8.6-3 .6H4.5V4zm4.1 3v3.2h2.7c.7 0 1.2-.1 1.6-.3.3-.2.5-.5.5-.9 0-.5-.2-.8-.6-1-.4-.2-.9-.3-1.6-.3H8.6zm0 5.1V15h3.1c.8 0 1.3-.1 1.7-.3.4-.2.6-.6.6-1.1 0-.5-.2-.9-.6-1.1-.4-.3-1-.4-1.8-.4H8.6zM20 9.5c.5.5.7 1.1.7 1.9h-5.1c.1-.6.4-1.2.8-1.7.4-.5 1.1-.7 1.9-.7.8 0 1.5.2 1.9.5zm-4.3 5.7c-.5-.4-.8-1-.9-1.8h5.4c-.1.8-.4 1.4-.9 1.9-.5.5-1.3.8-2.3.8-.9 0-1.6-.3-2.1-.9z"/>
        </svg>
      ), 
      name: 'Behance', 
      link: 'https://www.behance.net/meerakarthika26' 
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always excited to take on new challenges and collaborate with amazing people. 
                Whether you have a project in mind or just want to chat about design, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-purple-600 group-hover:text-blue-600 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 shadow-md"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                  placeholder="Project inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
