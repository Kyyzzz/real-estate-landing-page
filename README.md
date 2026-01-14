# Pahrump Realtor - Modern Real Estate Website

A beautiful, modern single-page real estate website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Inspired by premium real estate websites with enhanced UI/UX and rich animations.

## Features

- ✨ **Modern Design**: Clean, professional interface with card-based layouts
- 🎨 **Rich Animations**: Smooth Framer Motion animations throughout
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🔍 **Property Search**: Advanced filtering system for property listings
- 🖼️ **Photo Gallery**: Interactive lightbox gallery with thumbnails
- 📧 **Contact Form**: Integrated contact form with WhatsApp integration
- 🎯 **Smooth Navigation**: Sticky header with smooth scroll to sections

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Images**: Unsplash (placeholder images)

## Project Structure

```
WeBuilderAssignment/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── RealtorProfile.tsx  # Profile section
│   ├── BuyerSellerGuides.tsx # Service guides
│   ├── PropertySearch.tsx  # Property search & grid
│   ├── TrustBadges.tsx     # Trust badges
│   ├── Services.tsx        # Services section
│   ├── PhotoGallery.tsx    # Photo gallery with lightbox
│   ├── ContactForm.tsx     # Contact form
│   └── Footer.tsx          # Footer
├── data/
│   └── mockProperties.ts   # Mock property data
├── types/
│   └── property.ts         # TypeScript interfaces
└── public/
    └── images/             # Static images
```

## Key Sections

### 1. Header/Navigation
- Sticky navigation with smooth scroll
- Mobile-responsive hamburger menu
- Animated entrance effects

### 2. Hero Section
- Full-screen banner with background image
- Prominent call-to-action buttons
- Scroll indicator animation

### 3. Realtor Profile
- Professional profile display
- Contact information
- Stats showcase (years of experience, clients, properties sold)

### 4. Buyer & Seller Guides
- Three-column card layout
- Service descriptions with feature lists
- Hover effects and animations

### 5. Property Search
- Advanced filtering system:
  - Location search
  - Property type dropdown
  - Bedrooms/bathrooms selectors
  - Price range filters
  - Sort options
- Grid layout with property cards
- Favorite/like functionality
- Real-time filter results

### 6. Trust Badges
- Professional certifications
- MLS membership
- BBB accreditation

### 7. Services Section
- Three main service cards
- Icon-based design
- Feature highlights

### 8. Photo Gallery
- 8-image grid layout
- Lightbox with navigation
- Thumbnail preview strip
- Full-screen image viewer

### 9. Contact Form
- Name, email, phone, message fields
- reCAPTCHA placeholder
- WhatsApp integration button
- Business hours and address
- Embedded Google Maps

### 10. Footer
- Social media links (Facebook, Instagram, LinkedIn, Yelp)
- Quick navigation links
- Contact information
- Copyright and attribution

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd WeBuilderAssignment
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: '#1e40af',    // Blue
  secondary: '#fbbf24',  // Gold
  dark: '#1a1a1a',       // Dark background
}
```

### Mock Data
Update property listings in `data/mockProperties.ts`

### Images
Replace Unsplash URLs with your own images or use the `/public/images` directory

## Design Features

### Animations
- Fade-in on scroll for all sections
- Staggered animations for card grids
- Smooth hover effects (scale, shadow)
- Button interactions
- Page transitions

### Responsive Breakpoints
- Mobile: 320px - 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

### Performance Optimizations
- Next.js Image component for optimized images
- Code splitting with App Router
- Lazy loading for images
- Optimized animations with Framer Motion

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for WeBuilder Assignment.

## Credits

- Design inspiration: [marcimetzger.com](https://marcimetzger.com/)
- Images: [Unsplash](https://unsplash.com/)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Animations: [Framer Motion](https://www.framer.com/motion/)

---

**Note**: This is a UI-only implementation. The contact form does not submit to a backend, and all property data is mock data stored locally.
