# 🚀 Deployment Guide

This guide will help you deploy your Cat Swipe App to GitHub Pages.

## Prerequisites

- Git installed on your computer
- A GitHub account
- Node.js and npm installed

## Step 1: Test Locally

First, make sure the app works locally:

```bash
cd cat-swipe-app
npm run dev
```

Visit `http://localhost:5173` and test the app:
- ✅ Swipe cards work
- ✅ Like/Dislike buttons work
- ✅ Progress bar updates
- ✅ Results screen shows correctly
- ✅ Start Over button works

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `cat-swipe-app` (or any name you prefer)
3. Make it **Public** (required for GitHub Pages free hosting)
4. Don't initialize with README (we already have one)

## Step 3: Update Configuration

1. Open `vite.config.js`
2. Update the `base` property to match your repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your actual repo name
})
```

For example, if your repo is named `cat-swipe-app`, use:
```javascript
base: '/cat-swipe-app/',
```

## Step 4: Initialize Git and Push

Run these commands in your terminal (inside the `cat-swipe-app` folder):

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Cat Swipe App"

# Add your GitHub repository as remote
# Replace <USERNAME> and <REPO> with your actual values
git remote add origin https://github.com/<USERNAME>/<REPO>.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 5: Deploy to GitHub Pages

### Option A: Using gh-pages package (Recommended)

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Deploy:
```bash
npm run deploy
```

This will build your app and deploy it to the `gh-pages` branch.

### Option B: Manual Deployment

1. Build the app:
```bash
npm run build
```

2. The `dist` folder contains your production files

3. Push the `dist` folder to the `gh-pages` branch:
```bash
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/<USERNAME>/<REPO>.git main:gh-pages
cd ..
```

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

## Step 7: Access Your Live Site

After a few minutes, your site will be live at:
```
https://<USERNAME>.github.io/<REPO>/
```

For example:
```
https://johndoe.github.io/cat-swipe-app/
```

## Step 8: Update README

Update the `README.md` file with your live demo link:

```markdown
## 🚀 Live Demo

[View Live Demo](https://<USERNAME>.github.io/<REPO>/)
```

## Troubleshooting

### Issue: Blank page after deployment

**Solution**: Make sure the `base` property in `vite.config.js` matches your repository name exactly.

### Issue: Images not loading

**Solution**: Check that the Cataas API is accessible. The app uses `https://cataas.com/cat` which should work without authentication.

### Issue: 404 error

**Solution**: 
1. Verify GitHub Pages is enabled in repository settings
2. Check that you're using the correct URL
3. Wait a few minutes for GitHub to process the deployment

### Issue: Changes not showing

**Solution**:
1. Clear your browser cache
2. Try in incognito/private mode
3. Wait a few minutes for GitHub Pages to update

## Making Updates

After making changes to your code:

```bash
# 1. Commit your changes
git add .
git commit -m "Your commit message"
git push origin main

# 2. Redeploy
npm run deploy
```

## Alternative: GitHub Actions (Advanced)

You can also set up automatic deployment using GitHub Actions. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

This will automatically deploy your app whenever you push to the main branch.

## Need Help?

If you encounter any issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Verify all steps were followed correctly
3. Check browser console for errors
4. Review the deployment logs on GitHub

---

Good luck with your deployment! 🚀🐱
