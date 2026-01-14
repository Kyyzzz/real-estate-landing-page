'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RealtorProfile from '@/components/RealtorProfile';
import BuyerSellerGuides from '@/components/BuyerSellerGuides';
import PropertySearch from '@/components/PropertySearch';
import TrustBadges from '@/components/TrustBadges';
import Services from '@/components/Services';
import PhotoGallery from '@/components/PhotoGallery';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <RealtorProfile />
      <BuyerSellerGuides />
      <PropertySearch />
      <TrustBadges />
      <Services />
      <PhotoGallery />
      <ContactForm />
      <Footer />
    </main>
  );
}
