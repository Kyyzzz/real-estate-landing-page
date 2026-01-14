'use client';

import { motion } from 'framer-motion';
import { FaHome, FaAward, FaCertificate, FaHandshake } from 'react-icons/fa';

const TrustBadges = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const badges = [
    {
      icon: FaHome,
      title: 'Equal Housing',
      subtitle: 'Opportunity',
    },
    {
      icon: FaCertificate,
      title: 'MLS Member',
      subtitle: 'Verified Listings',
    },
    {
      icon: FaAward,
      title: 'NAR Member',
      subtitle: 'National Association',
    },
    {
      icon: FaHandshake,
      title: 'BBB Accredited',
      subtitle: 'A+ Rating',
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-3 p-4 bg-white rounded-full shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                <badge.icon className="text-3xl text-primary" />
              </div>
              <h4 className="font-bold text-gray-900 text-sm tracking-tight">{badge.title}</h4>
              <p className="text-xs text-gray-600 font-medium">{badge.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
