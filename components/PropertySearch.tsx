'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaSearch, FaHeart } from 'react-icons/fa';
import { mockProperties } from '@/data/mockProperties';
import { Property, PropertyFilters } from '@/types/property';

const PropertySearch = () => {
  const [filters, setFilters] = useState<PropertyFilters>({
    location: '',
    propertyType: 'All',
    bedrooms: 0,
    bathrooms: 0,
    minPrice: 0,
    maxPrice: 1000000,
    sortBy: 'price-asc',
  });

  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let filtered = [...mockProperties];

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(
        prop =>
          prop.city.toLowerCase().includes(filters.location.toLowerCase()) ||
          prop.address.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Property type filter
    if (filters.propertyType !== 'All') {
      filtered = filtered.filter(prop => prop.propertyType === filters.propertyType);
    }

    // Bedrooms filter
    if (filters.bedrooms > 0) {
      filtered = filtered.filter(prop => prop.bedrooms >= filters.bedrooms);
    }

    // Bathrooms filter
    if (filters.bathrooms > 0) {
      filtered = filtered.filter(prop => prop.bathrooms >= filters.bathrooms);
    }

    // Price filter
    filtered = filtered.filter(
      prop => prop.price >= filters.minPrice && prop.price <= filters.maxPrice
    );

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'bedrooms':
          return b.bedrooms - a.bedrooms;
        case 'newest':
          return (b.yearBuilt || 0) - (a.yearBuilt || 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-gray-900 mb-4 tracking-tight">
            Find Your <span className="text-primary">Dream Home</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light">
            Browse our extensive collection of properties
          </p>
        </motion.div>

        {/* Search Filters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-gray-50 rounded-2xl shadow-lg p-6 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Location */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                Location
              </label>
              <input
                type="text"
                placeholder="City or Address"
                value={filters.location}
                onChange={e => setFilters({ ...filters, location: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base font-medium"
              />
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                Property Type
              </label>
              <select
                value={filters.propertyType}
                onChange={e => setFilters({ ...filters, propertyType: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base font-medium"
              >
                <option value="All">All Types</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Land">Land</option>
                <option value="Condo">Condo</option>
                <option value="Townhouse">Townhouse</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                Min Bedrooms
              </label>
              <select
                value={filters.bedrooms}
                onChange={e => setFilters({ ...filters, bedrooms: Number(e.target.value) })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base font-medium"
              >
                <option value="0">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            {/* Bathrooms */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                Min Bathrooms
              </label>
              <select
                value={filters.bathrooms}
                onChange={e => setFilters({ ...filters, bathrooms: Number(e.target.value) })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base font-medium"
              >
                <option value="0">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Min Price */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                Min Price
              </label>
              <select
                value={filters.minPrice}
                onChange={e => setFilters({ ...filters, minPrice: Number(e.target.value) })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base font-medium"
              >
                <option value="0">No Min</option>
                <option value="100000">$100,000</option>
                <option value="200000">$200,000</option>
                <option value="300000">$300,000</option>
                <option value="400000">$400,000</option>
                <option value="500000">$500,000</option>
              </select>
            </div>

            {/* Max Price */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                Max Price
              </label>
              <select
                value={filters.maxPrice}
                onChange={e => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base font-medium"
              >
                <option value="1000000">No Max</option>
                <option value="200000">$200,000</option>
                <option value="300000">$300,000</option>
                <option value="400000">$400,000</option>
                <option value="500000">$500,000</option>
                <option value="600000">$600,000</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                Sort By
              </label>
              <select
                value={filters.sortBy}
                onChange={e => setFilters({ ...filters, sortBy: e.target.value as any })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base font-medium"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="bedrooms">Most Bedrooms</option>
              </select>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm font-medium text-gray-600 tracking-wide">
              Showing <span className="font-bold text-primary text-base">{filteredProperties.length}</span> properties
            </p>
          </div>
        </motion.div>

        {/* Property Grid */}
        <motion.div
          key={`properties-${filteredProperties.length}-${filters.propertyType}-${filters.bedrooms}-${filters.bathrooms}`}
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              variants={fadeInUp}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.status}
                  </span>
                </div>
                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <FaHeart
                    className={`text-xl ${
                      favorites.includes(property.id) ? 'text-red-500' : 'text-gray-400'
                    }`}
                  />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-2xl font-bold tracking-tight">
                    ${property.price.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors tracking-tight">
                  {property.title}
                </h3>
                <p className="flex items-center text-sm text-gray-600 mb-4 font-medium">
                  <FaMapMarkerAlt className="mr-2 text-primary" />
                  {property.address}, {property.city}
                </p>

                {/* Property Details */}
                <div className="flex items-center justify-between text-gray-700 mb-4 pb-4 border-b border-gray-200">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center">
                      <FaBed className="text-primary mr-1" />
                      <span className="text-sm font-semibold">{property.bedrooms} Bed</span>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="flex items-center">
                      <FaBath className="text-primary mr-1" />
                      <span className="text-sm font-semibold">{property.bathrooms} Bath</span>
                    </div>
                  )}
                  {property.squareFeet > 0 && (
                    <div className="flex items-center">
                      <FaRulerCombined className="text-primary mr-1" />
                      <span className="text-sm font-semibold">{property.squareFeet.toLocaleString()} sqft</span>
                    </div>
                  )}
                </div>

                {/* Property Type */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{property.propertyType}</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors text-sm font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No properties found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search filters</p>
            <button
              onClick={() =>
                setFilters({
                  location: '',
                  propertyType: 'All',
                  bedrooms: 0,
                  bathrooms: 0,
                  minPrice: 0,
                  maxPrice: 1000000,
                  sortBy: 'price-asc',
                })
              }
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PropertySearch;
