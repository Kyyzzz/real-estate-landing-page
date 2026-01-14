'use client';

import { motion } from 'framer-motion';
import { FaBuilding, FaHome, FaChartLine, FaHandshake, FaClipboardList, FaLightbulb } from 'react-icons/fa';

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      icon: FaBuilding,
      title: 'Real Estate Done Right',
      subtitle: 'Commercial & Residential',
      description: 'From cozy homes to commercial properties, we handle all types of real estate transactions with professionalism and expertise.',
      features: ['Residential Sales', 'Commercial Leasing', 'Investment Properties'],
    },
    {
      icon: FaHome,
      title: 'Large or Small',
      subtitle: 'Every Property Matters',
      description: 'Whether you\'re buying your first condo or selling a luxury estate, every client and property receives our full attention and dedication.',
      features: ['First-Time Buyers', 'Luxury Estates', 'Investment Portfolio'],
    },
    {
      icon: FaChartLine,
      title: 'Rely on Expertise',
      subtitle: 'Financial Guidance',
      description: 'Navigate the complex world of real estate finance with confidence. We provide expert guidance on pricing, negotiations, and investment strategies.',
      features: ['Market Analysis', 'Price Negotiation', 'ROI Optimization'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive real estate solutions tailored to your unique needs
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="text-3xl text-primary group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors tracking-tight">
                {service.title}
              </h3>
              <p className="text-xs text-secondary font-bold mb-4 uppercase tracking-wider">{service.subtitle}</p>
              <p className="text-gray-600 mb-6 leading-relaxed font-light text-base">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700 font-medium">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaHandshake className="text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 tracking-tight">Personalized Service</h4>
              <p className="text-white/90 font-light">One-on-one attention for every client</p>
            </div>
            <div className="text-center">
              <FaClipboardList className="text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 tracking-tight">Detailed Process</h4>
              <p className="text-white/90 font-light">Clear communication every step of the way</p>
            </div>
            <div className="text-center">
              <FaLightbulb className="text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 tracking-tight">Expert Insights</h4>
              <p className="text-white/90 font-light">Market knowledge and strategic advice</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
