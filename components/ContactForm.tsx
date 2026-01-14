'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-gray-900 mb-4 tracking-tight">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light">
            Let&apos;s discuss your real estate needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Send us a Message</h3>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base font-medium"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base font-medium"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base font-medium"
                    placeholder="(775) 555-1234"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none text-base font-medium leading-relaxed"
                    placeholder="Tell us about your real estate needs..."
                  />
                </div>

                {/* reCAPTCHA Placeholder */}
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 flex items-center justify-center">
                  <p className="text-sm text-gray-600">
                    <input type="checkbox" className="mr-2" required />
                    I&apos;m not a robot (reCAPTCHA placeholder)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary-dark transition-all font-semibold text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* WhatsApp Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="https://wa.me/17755551234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all font-semibold"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 tracking-tight">Office Address</h4>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                      123 Main Street<br />
                      Pahrump, NV 89048
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaPhone className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 tracking-tight">Phone</h4>
                    <a href="tel:+17755551234" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">
                      (775) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 tracking-tight">Email</h4>
                    <a href="mailto:info@pahrumprealtor.com" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">
                      info@pahrumprealtor.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaClock className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 tracking-tight">Business Hours</h4>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM<br />
                      Sun: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102934.97619384705!2d-116.08631899999999!3d36.2082536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c92af6cb95993d%3A0x646c2730d69f0f53!2sPahrump%2C%20NV!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
