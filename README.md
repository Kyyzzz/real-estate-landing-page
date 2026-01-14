# Real Estate Landing Page

A modern, responsive real estate landing page built with Next.js 14, TypeScript, and Tailwind CSS. Features property search, contact forms, service showcase, and more.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## 🌟 Features

- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Property Search** - Advanced search with filters for location, price, and property type
- **Interactive Gallery** - Photo gallery with modal lightbox view
- **Contact Form** - Built-in contact form for lead generation
- **Service Showcase** - Highlight real estate services offered
- **Buyer/Seller Guides** - Educational content for potential clients
- **Trust Badges** - Build credibility with certifications and awards
- **Modern UI/UX** - Clean, professional design with smooth animations
- **SEO Optimized** - Built with Next.js for optimal search engine performance
- **Fast Performance** - Optimized images and code splitting

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## 📦 Project Structure

```
real-estate-landing-page/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── PropertySearch.tsx  # Property search with filters
│   ├── Services.tsx        # Services showcase
│   ├── PhotoGallery.tsx    # Image gallery with lightbox
│   ├── RealtorProfile.tsx  # Agent profile section
│   ├── BuyerSellerGuides.tsx # Educational guides
│   ├── ContactForm.tsx     # Contact form
│   ├── TrustBadges.tsx     # Certifications display
│   └── Footer.tsx          # Footer with links
├── data/
│   └── mockProperties.ts   # Mock property data
├── types/
│   └── property.ts         # TypeScript interfaces
└── assets/
    └── marci.jpg           # Profile image

```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Local Development

1. **Clone the repository:**

```bash
git clone https://github.com/Kyyzzz/real-estate-landing-page.git
cd real-estate-landing-page
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on localhost:3000 |
| `npm run build` | Build production-ready application |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## 🎨 Customization

### Update Property Data

Edit `data/mockProperties.ts` to add your real property listings:

```typescript
export const properties: Property[] = [
  {
    id: 1,
    title: "Your Property Title",
    location: "City, State",
    price: 500000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2000,
    image: "/path/to/image.jpg",
    type: "house"
  },
  // Add more properties...
];
```

### Update Realtor Information

Modify `components/RealtorProfile.tsx` to update:
- Profile image
- Name and title
- Bio and credentials
- Contact information
- Social media links

### Customize Colors

Update `tailwind.config.ts` to change the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Configure Contact Form

To make the contact form functional:

1. Integrate with an email service (SendGrid, Resend, EmailJS)
2. Add API route in `app/api/contact/route.ts`
3. Update form submission handler in `components/ContactForm.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Vercel will automatically:
- Detect Next.js configuration
- Build your application
- Deploy to a production URL
- Set up automatic deployments for future pushes

### Deploy to Other Platforms

This project can also be deployed to:
- **Netlify** - Import from Git
- **AWS Amplify** - Connect repository
- **Railway** - Deploy with one click
- **Self-hosted** - Run `npm run build` and `npm start`

## 🔧 Environment Variables

If you add backend functionality, create a `.env.local` file:

```bash
# Example environment variables
NEXT_PUBLIC_API_URL=your_api_url
EMAIL_SERVICE_API_KEY=your_api_key
```

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Known Issues

- Contact form currently shows success message without actual email sending (requires backend integration)
- Property data is mock data (replace with real API or CMS)

## 🔮 Future Enhancements

- [ ] Backend API integration for property listings
- [ ] User authentication for saved searches
- [ ] Property comparison feature
- [ ] Mortgage calculator
- [ ] Virtual tour integration
- [ ] Blog/News section
- [ ] Multi-language support
- [ ] Admin dashboard for property management

## 📞 Support

For support, email your-email@example.com or open an issue on GitHub.

## 🙏 Acknowledgments

- Design inspiration from modern real estate websites
- Icons by [Lucide](https://lucide.dev/)
- Built with [Next.js](https://nextjs.org/)

---

**Live Demo:** [Your Vercel URL]

**Repository:** [https://github.com/Kyyzzz/real-estate-landing-page](https://github.com/Kyyzzz/real-estate-landing-page)

Made with ❤️ for real estate professionals
