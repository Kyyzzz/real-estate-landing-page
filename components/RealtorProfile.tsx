'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaAward, FaStar } from 'react-icons/fa';
import marciImage from '../assets/marci.jpg';

const RealtorProfile = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { icon: FaAward, value: '30+', label: 'Years Experience' },
    { icon: FaStar, value: '500+', label: 'Happy Clients' },
    { icon: FaAward, value: '1000+', label: 'Properties Sold' },
  ];

  return (
    <section id="profile" className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
                <img
                  src={marciImage.src}
                  alt="Professional Realtor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Profile Info */}
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black mb-4 tracking-tight leading-tight">
              Your Local <span className="text-secondary">Expert</span>
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-secondary mb-6 tracking-wide uppercase">
              Realtor for Nearly 3 Decades!
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed font-light">
              With almost 30 years of experience in the Pahrump real estate market, 
              I&apos;ve helped countless families find their perfect home. My commitment 
              to excellence and personalized service sets me apart in the industry.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+17755551234"
                className="flex items-center justify-center md:justify-start space-x-3 text-lg sm:text-xl hover:text-secondary transition-colors group"
              >
                <FaPhone className="text-secondary group-hover:scale-110 transition-transform" />
                <span className="font-semibold tracking-tight">(775) 555-1234</span>
              </a>
              <a
                href="mailto:info@pahrumprealtor.com"
                className="flex items-center justify-center md:justify-start space-x-3 text-lg sm:text-xl hover:text-secondary transition-colors group"
              >
                <FaEnvelope className="text-secondary group-hover:scale-110 transition-transform" />
                <span className="font-medium tracking-tight">info@pahrumprealtor.com</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <stat.icon className="text-3xl text-secondary mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealtorProfile;
