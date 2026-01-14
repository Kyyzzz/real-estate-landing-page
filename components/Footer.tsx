'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaYelp, FaPhone, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, url: 'https://www.facebook.com/MarciHomes/', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/marciandlauren_nvrealtors/', label: 'Instagram' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/marci-metzger-30642496/', label: 'LinkedIn' },
    { icon: FaYelp, url: 'https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump', label: 'Yelp' },
  ];

  const quickLinks = [
    { label: 'About', href: '#profile' },
    { label: 'Services', href: '#services' },
    { label: 'Properties', href: '#properties' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              <span className="text-white font-serif">Pahrump</span>
              <span className="text-secondary font-serif"> Realtor</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed font-light text-sm">
              Your trusted real estate partner with nearly 3 decades of experience in the Pahrump area.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 tracking-tight">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-secondary transition-colors font-medium text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 tracking-tight">Our Services</h4>
            <ul className="space-y-2 text-gray-400 font-light text-sm">
              <li>Residential Sales</li>
              <li>Commercial Real Estate</li>
              <li>Property Management</li>
              <li>Investment Properties</li>
              <li>Market Analysis</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 tracking-tight">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+17755551234"
                className="flex items-center space-x-3 text-gray-400 hover:text-secondary transition-colors font-medium text-sm"
              >
                <FaPhone className="flex-shrink-0" />
                <span>(775) 555-1234</span>
              </a>
              <a
                href="mailto:info@pahrumprealtor.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-secondary transition-colors font-medium text-sm"
              >
                <FaEnvelope className="flex-shrink-0" />
                <span>info@pahrumprealtor.com</span>
              </a>
              <p className="text-gray-400 text-sm mt-4 font-light leading-relaxed">
                123 Main Street<br />
                Pahrump, NV 89048
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left font-light">
              © {currentYear} Pahrump Realtor. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm font-light">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>by Paulo</span>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="flex justify-center space-x-6 mt-4">
            <button className="text-gray-400 hover:text-secondary text-sm transition-colors font-medium">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-secondary text-sm transition-colors font-medium">
              Terms of Service
            </button>
            <button className="text-gray-400 hover:text-secondary text-sm transition-colors font-medium">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
