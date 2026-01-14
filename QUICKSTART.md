# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Visit: **http://localhost:3000**

---

## 📱 Test Responsive Design

Open Chrome DevTools (F12) and test different viewports:
- **Mobile**: 375px width (iPhone)
- **Tablet**: 768px width (iPad)
- **Desktop**: 1920px width

---

## 🎨 Key Features to Explore

### Navigation
- Click navigation items to scroll smoothly to sections
- On mobile/tablet (< 1024px): Click hamburger menu

### Property Search
- Use filters to search properties
- Click heart icon to favorite
- Try different combinations of filters

### Photo Gallery
- Click any photo to open lightbox
- Navigate with arrows or click outside to close

### Contact Form
- Fill out the form (UI only, no actual submission)
- Click WhatsApp button for messaging

---

## 🛠️ Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#1e40af',    // Change primary color
  secondary: '#fbbf24',  // Change accent color
}
```

### Update Properties
Edit `data/mockProperties.ts` to add/modify property listings

### Replace Images
- Add images to `/public/images/`
- Update image URLs in components

---

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Run production server
npm run lint     # Run ESLint
```

---

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Dependencies not installing?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Page not loading?
1. Check if dev server is running
2. Clear browser cache (Ctrl + Shift + R)
3. Check console for errors (F12)

---

## 📖 Documentation

- **Full Documentation**: See [README.md](README.md)
- **Project Summary**: See [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
- **Implementation Plan**: See plan document in `.cursor/plans/`

---

## ✨ Features Overview

| Feature | Status | Location |
|---------|--------|----------|
| Header Navigation | ✅ | `components/Header.tsx` |
| Hero Section | ✅ | `components/Hero.tsx` |
| Profile Section | ✅ | `components/RealtorProfile.tsx` |
| Service Guides | ✅ | `components/BuyerSellerGuides.tsx` |
| Property Search | ✅ | `components/PropertySearch.tsx` |
| Trust Badges | ✅ | `components/TrustBadges.tsx` |
| Services | ✅ | `components/Services.tsx` |
| Photo Gallery | ✅ | `components/PhotoGallery.tsx` |
| Contact Form | ✅ | `components/ContactForm.tsx` |
| Footer | ✅ | `components/Footer.tsx` |

---

**Need Help?** Check the main README.md for detailed information.

**Happy Coding! 🎉**
