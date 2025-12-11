# GitHub Pages Deployment Guide

This guide will help you deploy the Daad Language website to GitHub Pages.

## 🎯 Repository Information

- **Repository**: `https://github.com/Galal36/daad-language.git`
- **Live URL**: `https://galal36.github.io/daad-language/`

## ✅ Pre-Deployment Checklist (Already Done!)

All necessary configurations have been completed:

- ✅ Switched from BrowserRouter to HashRouter for GitHub Pages compatibility
- ✅ Added base path `/daad-language/` to vite.config.ts
- ✅ Updated page title and meta description
- ✅ Created 404.html fallback for better routing
- ✅ Set up GitHub Actions workflow for automatic deployment

## 📦 Deployment Steps

### Step 1: Push to GitHub

From the `spark-haven` directory, run:

```bash
git init
git add .
git commit -m "Initial commit: Daad Language website"
git branch -M main
git remote add origin https://github.com/Galal36/daad-language.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/Galal36/daad-language
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Click **Save**

### Step 3: Automatic Deployment

Once you push to the `main` branch, GitHub Actions will:
1. Automatically install dependencies
2. Build your project
3. Deploy to GitHub Pages

You can monitor the deployment:
- Go to the **Actions** tab in your repository
- Watch the "Deploy to GitHub Pages" workflow

### Step 4: Access Your Site

After deployment completes (2-3 minutes), visit:

**https://galal36.github.io/daad-language/**

## 🔄 Future Updates

Every time you push to the `main` branch, your site will automatically rebuild and redeploy!

```bash
# Make your changes, then:
git add .
git commit -m "Description of your changes"
git push
```

## 🧪 Local Testing

Before pushing, test locally:

```bash
# Development mode
pnpm dev

# Build and preview production version
pnpm build
pnpm preview
```

## 📝 Important Notes

### URLs with HashRouter

Your site uses HashRouter, so URLs will look like:
- Home: `https://galal36.github.io/daad-language/#/`
- About: `https://galal36.github.io/daad-language/#/about`
- Courses: `https://galal36.github.io/daad-language/#/courses`

This is normal and ensures all routes work correctly on GitHub Pages!

### Images

All images are in the `public` folder and will be served correctly:
- `/background_at_top_of_page.jpg`
- `/Jalal_Arabic_instructor.jpg`

### Custom Domain (Optional)

To use a custom domain like `www.daadlanguage.com`:
1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## 🐛 Troubleshooting

### If the site doesn't load:
1. Check the Actions tab for build errors
2. Ensure GitHub Pages is enabled in Settings → Pages
3. Wait 2-3 minutes after first deployment
4. Clear browser cache and try again

### If routes don't work:
- Make sure you're using the hash (#) in URLs
- Example: `/#/about` not `/about`

### If images don't load:
- Check that images are in the `public` folder
- Verify paths start with `/` (e.g., `/Jalal_Arabic_instructor.jpg`)

## 📧 Support

If you encounter issues, check:
- GitHub Actions logs in the Actions tab
- Browser console for errors (F12)
- GitHub Pages status in Settings → Pages

---

**Ready to deploy?** Follow Step 1 above! 🚀

