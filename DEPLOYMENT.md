# 🚀 Deployment Guide - Support Sync

This guide will help you deploy the Support Sync CalAIM platform to GitHub Pages.

## Quick Start

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `Support-Sync` (or any name you prefer)
3. Make it public (required for GitHub Pages)
4. Don't initialize with README (we already have one)

### 2. Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Support Sync CalAIM platform"

# Add your GitHub repository as origin
git remote add origin https://github.com/[YOUR_USERNAME]/Support-Sync.git

# Push to main branch
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. The deployment will start automatically

### 4. Access Your Live Site

Your site will be available at:
```
https://[YOUR_USERNAME].github.io/Support-Sync
```

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The build output will be in the 'out' folder
# You can then manually upload the contents to GitHub Pages
```

## Troubleshooting

### Common Issues

1. **404 Error**: Make sure the repository name matches the basePath in `next.config.js`
2. **Assets Not Loading**: Check that `assetPrefix` is correctly set
3. **Build Fails**: Ensure all dependencies are installed with `npm install`

### GitHub Actions Issues

1. **Workflow Not Running**: Check that the workflow file is in `.github/workflows/`
2. **Permission Errors**: Ensure GitHub Actions has write permissions
3. **Build Errors**: Check the Actions tab for detailed error logs

### Custom Domain

To use a custom domain:

1. Create a `CNAME` file in the root directory:
   ```
   yourdomain.com
   ```

2. Update `.github/workflows/deploy.yml`:
   ```yaml
   with:
     cname: yourdomain.com
   ```

3. Configure DNS with your domain provider

## Environment Variables

For production configuration, create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://yourusername.github.io/Support-Sync
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## Performance Optimization

The deployment includes several optimizations:

- Static export for fast loading
- Optimized images
- Minified CSS and JavaScript
- Gzip compression (handled by GitHub Pages)

## Security

- No sensitive data in the repository
- All data is mock/simulation data
- HTTPS enabled by default on GitHub Pages
- No API keys or secrets required

## Monitoring

After deployment, you can monitor:

- GitHub Actions for build status
- GitHub Pages for deployment status
- Browser developer tools for performance
- Google Analytics (if configured)

## Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Verify the repository settings
3. Ensure all files are committed and pushed
4. Check the browser console for errors

---

**Note**: This is a demonstration platform. All patient data shown is simulated and no real healthcare information is used.
