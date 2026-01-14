'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      title: 'Luxury Home Exterior',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      title: 'Modern Kitchen',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      title: 'Spacious Living Room',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      title: 'Master Bedroom',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
      title: 'Beautiful Backyard',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80',
      title: 'Elegant Bathroom',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80',
      title: 'Home Office',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80',
      title: 'Dining Area',
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handlePrevious = () => {
    if (selectedImage !== null) {
      const newIndex = selectedImage === 0 ? images.length - 1 : selectedImage - 1;
      setSelectedImage(newIndex);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const newIndex = selectedImage === images.length - 1 ? 0 : selectedImage + 1;
      setSelectedImage(newIndex);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black mb-4 tracking-tight">
            Property <span className="text-secondary">Gallery</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 font-light">
            Take a look at some of our stunning properties
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={fadeInUp}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm tracking-tight">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Thumbnail Strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-center space-x-2 overflow-x-auto pb-2"
        >
          {images.slice(0, 6).map((image, index) => (
            <div
              key={`thumb-${image.id}`}
              className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-600 hover:border-secondary cursor-pointer transition-colors"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-secondary transition-colors z-10"
            >
              <FaTimes className="text-3xl" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 text-white hover:text-secondary transition-colors z-10"
            >
              <FaChevronLeft className="text-4xl" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 text-white hover:text-secondary transition-colors z-10"
            >
              <FaChevronRight className="text-4xl" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-xl font-bold tracking-tight">{images[selectedImage].title}</p>
                <p className="text-gray-300 text-sm font-medium">
                  Image {selectedImage + 1} of {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
