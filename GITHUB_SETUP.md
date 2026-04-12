# 🚀 Push to GitHub Guide

## Step 1: Initialize Git (if not already done)

```bash
cd /app
git init
git add .
git commit -m "Initial commit: Portfolio with Mixpanel analytics"
```

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. **Repository name:** `portfolio-dhruv-pandya` (or your preferred name)
3. **Description:** "Personal Product Manager Portfolio - Built with React & FastAPI"
4. **Visibility:** Public or Private (your choice)
5. **DO NOT** check "Initialize with README" (we have files already)
6. Click **"Create repository"**

## Step 3: Connect to GitHub

After creating the repo, GitHub will show you commands. Use these:

```bash
cd /app

# Add your GitHub repo as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio-dhruv-pandya.git

# Set branch name to main
git branch -M main

# Push your code
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 4: Verify

1. Go to your GitHub repo: `https://github.com/YOUR_USERNAME/portfolio-dhruv-pandya`
2. You should see all your files
3. Check that the code is up to date

## Step 5: Future Updates

Whenever you make changes to your portfolio:

```bash
cd /app
git add .
git commit -m "Description of your changes"
git push
```

## Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio-dhruv-pandya.git
```

### Error: "Permission denied"
You need to authenticate with GitHub:
- **Option 1:** Use GitHub CLI: `gh auth login`
- **Option 2:** Use Personal Access Token
  - Go to https://github.com/settings/tokens
  - Generate new token (classic)
  - Use token as password when pushing

### Error: "Updates were rejected"
```bash
git pull origin main --rebase
git push
```

---

## What's Been Removed

✅ "Made with Emergent" badge removed
✅ Emergent scripts removed  
✅ Updated meta description
✅ Updated page title to "Dhruv Pandya | Product Operations Portfolio"
✅ Clean HTML without tracking scripts

Your portfolio is now completely yours! 🎉
