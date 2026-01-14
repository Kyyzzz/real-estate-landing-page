'use client';

import { motion } from 'framer-motion';
import { FaHome, FaDollarSign, FaHandshake, FaChartLine, FaKey, FaClipboardCheck } from 'react-icons/fa';

const BuyerSellerGuides = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const guides = [
    {
      title: 'Get It Sold',
      subtitle: 'Top Residential Sales',
      description: 'Maximize your property value with our proven marketing strategies. We leverage cutting-edge technology and extensive market knowledge to get you the best price.',
      icon: FaDollarSign,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
      features: [
        'Professional photography',
        'Strategic pricing',
        'Wide marketing reach',
        'Expert negotiations',
      ],
    },
    {
      title: "Don't Just List It",
      subtitle: 'Premium Marketing Approach',
      description: 'Your property deserves more than a simple listing. Our comprehensive marketing approach includes digital campaigns, social media promotion, and professional staging.',
      icon: FaChartLine,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      features: [
        'Social media marketing',
        'Virtual tours',
        'Open house events',
        'MLS exposure',
      ],
    },
    {
      title: 'Guide to Buyers',
      subtitle: 'Your Home Buying Journey',
      description: 'From first-time buyers to seasoned investors, we guide you through every step. Our personalized service ensures you find the perfect property that fits your needs and budget.',
      icon: FaKey,
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80',
      features: [
        'Property search assistance',
        'Financial guidance',
        'Home inspections',
        'Closing support',
      ],
    },
  ];

  return (
    <section id="guides" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-gray-900 mb-4 tracking-tight">
            <span className="text-primary">Buyer</span> & <span className="text-primary">Seller</span> Guides
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive services tailored to your real estate needs
          </p>
        </motion.div>

        {/* Guide Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {guides.map((guide, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <guide.icon className="text-4xl text-secondary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{guide.title}</h3>
                <p className="text-xs text-secondary font-bold mb-3 uppercase tracking-wider">{guide.subtitle}</p>
                <p className="text-gray-600 mb-4 leading-relaxed font-light text-base">{guide.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {guide.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700 font-medium">
                      <FaClipboardCheck className="text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors font-bold tracking-tight">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-base sm:text-lg text-gray-600 mb-6 font-light">
            Ready to get started? Let's discuss your real estate goals.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 bg-secondary text-gray-900 px-8 py-4 rounded-full hover:bg-secondary-dark transition-all hover:shadow-lg font-bold text-base sm:text-lg tracking-tight"
          >
            <FaHandshake />
            <span>Schedule a Consultation</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BuyerSellerGuides;
