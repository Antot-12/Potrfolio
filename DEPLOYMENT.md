# GitHub Pages Deployment Guide

## ✅ Configuration Complete

Your portfolio is now fully optimized for GitHub Pages deployment!

## What Was Configured

### 1. **Next.js Configuration** (`next.config.js`)

- ✅ `output: 'export'` - Enables static HTML export
- ✅ `images.unoptimized: true` - Required for GitHub Pages (no server-side image optimization)
- ✅ `basePath` support for custom repository names

### 2. **GitHub Actions Workflow** (`.github/workflows/nextjs.yml`)

- ✅ Auto-deploys on push to `main` branch
- ✅ Environment variables set: `EXPORT=true`, `UNOPTIMIZED=true`
- ✅ Uploads to `./out` directory
- ✅ Automatic deployment to GitHub Pages

### 3. **Build Scripts** (`package.json`)

- ✅ Standard build: `yarn build`
- ✅ GitHub-optimized build: `yarn build:github`

### 4. **Static Export Files**

- ✅ `.nojekyll` file created (prevents Jekyll processing)
- ✅ `.env.production` with GitHub Pages settings

## 🚀 How to Deploy

### Automatic Deployment (Recommended)

1. Commit your changes:

   ```bash
   git add .
   git commit -m "Optimize for GitHub Pages"
   git push origin main
   ```

2. GitHub Actions will automatically:
   - Build your site
   - Generate static files in `./out`
   - Deploy to GitHub Pages

3. Check deployment status:
   - Go to your repo → **Actions** tab
   - Watch the "Deploy Next.js site to Pages" workflow

### Manual Deployment

```bash
# Build for GitHub Pages
yarn build:github

# The ./out directory now contains your static site
```

## 🔧 GitHub Repository Settings

Make sure GitHub Pages is enabled in your repository:

1. Go to **Settings** → **Pages**
2. Source: **GitHub Actions** (should be auto-selected)
3. Your site will be at: `https://Antot-12.github.io/Potrfolio/`

### If using custom domain:

Update `siteMetadata.js`:

```javascript
siteUrl: 'https://yourdomain.com',
```

### If using repo name in URL (e.g., `/Potrfolio`):

The workflow automatically handles this with `basePath`.

## 📊 What Gets Deployed

- ✅ Static HTML pages
- ✅ Optimized CSS (Tailwind)
- ✅ Client-side JavaScript
- ✅ All images from `/public`
- ✅ Blog posts (MDX → HTML)
- ✅ Certifications data
- ✅ Projects data
- ✅ RSS feeds

## ⚠️ Limitations (Static Export)

The following features require a server and won't work on GitHub Pages:

- ❌ API routes (`/api/*`)
- ❌ Server-side image optimization
- ❌ ISR (Incremental Static Regeneration)
- ❌ Server-side database queries (Prisma)

Your site uses client-side rendering and static data, so these limitations don't affect it.

## 🎨 Features That Work Perfectly

- ✅ About page with Stats, Skills, Certifications, Career Timeline
- ✅ Blog with MDX posts
- ✅ Projects showcase
- ✅ Dark/Light theme toggle
- ✅ Responsive design
- ✅ SEO optimization
- ✅ RSS feeds
- ✅ Search functionality (client-side)

## 🐛 Troubleshooting

### Build fails on GitHub Actions

- Check the Actions tab for error logs
- Common issues:
  - Missing dependencies
  - TypeScript errors
  - Build script errors

### Images not loading

- Make sure images are in `/public/static/images/`
- Use relative paths: `/static/images/...`

### 404 on navigation

- Verify `output: 'export'` is set in `next.config.js`
- Check that pages are in `/app` directory

### Styles not loading

- Tailwind CSS is compiled during build
- Check `tailwind.config.js` content paths

## 📝 Update Site Metadata

Before final deployment, update `data/siteMetadata.js`:

```javascript
siteUrl: 'https://Antot-12.github.io/Potrfolio/', // Your actual GitHub Pages URL
siteRepo: 'https://github.com/Antot-12/Potrfolio', // Your repo
```

## ✨ Performance Optimizations

- ✅ Static generation (fast loading)
- ✅ Next.js Image component (optimized images)
- ✅ Code splitting
- ✅ CSS minification
- ✅ Tree-shaking unused code
- ✅ Compression

## 🔄 Continuous Deployment

Every push to `main` automatically:

1. Triggers GitHub Actions
2. Builds the site
3. Deploys to GitHub Pages
4. Site updates in ~2-3 minutes

## 📱 Testing Before Deploy

Test locally with production build:

```bash
yarn build:github
npx serve out
```

Then open http://localhost:3000

---

**Your site is ready for GitHub Pages! 🎉**

Push to `main` and watch it deploy automatically.
