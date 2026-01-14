# Deployment Guide: GitHub & Vercel

This guide will walk you through deploying your real estate landing page to GitHub and Vercel.

## ✅ Step 1: Push to GitHub (COMPLETED)

Your local git repository has been initialized and committed.

### Next Steps for GitHub:

1. **Create a new GitHub repository:**
   - Go to https://github.com/new
   - Name your repository (e.g., `real-estate-landing-page`)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Connect your local repo to GitHub:**
   
   Once you create the repository, GitHub will show you commands. Run these in your terminal:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

   **OR** if you prefer SSH:

   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

## 🚀 Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended for first-time users)

1. **Sign up/Login to Vercel:**
   - Go to https://vercel.com
   - Sign up or log in (you can use your GitHub account)

2. **Import your GitHub repository:**
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"
   - Authorize Vercel to access your GitHub account if prompted
   - Select your repository from the list

3. **Configure your project:**
   - **Framework Preset:** Next.js (should be auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

4. **Environment Variables (if needed):**
   - Currently, your app doesn't require any environment variables
   - If you add API keys later, you can add them here

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - You'll get a live URL like `https://your-project.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? (press enter for default)
   - In which directory is your code located? **.**
   - Want to override settings? **N**

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

## 🎉 After Deployment

### Your live site will include:
- ✅ Responsive real estate landing page
- ✅ Property search functionality
- ✅ Contact form
- ✅ Services showcase
- ✅ Photo gallery
- ✅ Buyer and seller guides

### Automatic Deployments:
- Every push to the `main` branch will automatically trigger a new deployment on Vercel
- Pull requests will get preview deployments

### Custom Domain (Optional):
1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## 📝 Important Notes

### Before Going Live:
1. **Replace mock data** in `data/mockProperties.ts` with real property listings
2. **Update contact information** in the contact form
3. **Add real images** (replace `marci.jpg` with actual property photos)
4. **Configure email service** for the contact form (consider using services like SendGrid, Resend, or EmailJS)
5. **Add analytics** (Google Analytics, Vercel Analytics, etc.)
6. **Set up SEO** (meta tags, Open Graph images, etc.)

### Performance Optimization:
- Vercel automatically optimizes your Next.js app
- Images are automatically optimized with Next.js Image component
- Static pages are cached at the edge for fast loading

### Monitoring:
- View deployment logs in Vercel dashboard
- Check analytics in Vercel Analytics (if enabled)
- Monitor performance with Vercel Speed Insights

## 🆘 Troubleshooting

### Build Fails on Vercel:
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

### 404 Errors:
- Make sure your routes are correct
- Check that all imports are using correct paths
- Verify that file names match the imports (case-sensitive)

### Slow Loading:
- Optimize images (use WebP format)
- Enable Vercel Analytics to identify bottlenecks
- Consider lazy loading components

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Documentation](https://docs.github.com)

## 🎯 Quick Commands Reference

```bash
# Git commands
git status                    # Check status
git add .                     # Stage all changes
git commit -m "message"       # Commit changes
git push                      # Push to GitHub

# Development
npm run dev                   # Start dev server
npm run build                 # Build for production
npm start                     # Start production server

# Vercel
vercel                        # Deploy preview
vercel --prod                 # Deploy to production
vercel logs                   # View logs
```

---

**Need help?** Feel free to ask questions or refer to the official documentation linked above!
