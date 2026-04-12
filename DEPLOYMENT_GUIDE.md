# 🚀 Deploying Your Portfolio to Vercel

## Prerequisites
- GitHub account (create at https://github.com if you don't have one)
- Vercel account (create at https://vercel.com - sign up with GitHub)

---

## Step 1: Push Your Code to GitHub

### Option A: Create New Repository (If you don't have a repo yet)

1. **Go to GitHub** and create a new repository:
   - Visit https://github.com/new
   - Repository name: `portfolio-dhruv-pandya`
   - Make it Public or Private (both work with Vercel)
   - Don't initialize with README (we have files already)
   - Click "Create repository"

2. **Push your code to GitHub:**
   ```bash
   cd /app
   git init
   git add .
   git commit -m "Initial commit - Portfolio with Mixpanel analytics"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-dhruv-pandya.git
   git push -u origin main
   ```

### Option B: Use Existing Repository
If you already have a repo, just push the latest changes:
```bash
cd /app
git add .
git commit -m "Add Vercel deployment config"
git push
```

---

## Step 2: Deploy to Vercel

### Method 1: Via Vercel Dashboard (Easiest - Recommended)

1. **Go to Vercel Dashboard:**
   - Visit https://vercel.com/dashboard
   - Click "Add New" → "Project"

2. **Import Git Repository:**
   - Click "Import" next to your GitHub repository
   - Select `portfolio-dhruv-pandya`

3. **Configure Project:**
   - **Framework Preset:** Create React App (should auto-detect)
   - **Root Directory:** Leave as `.` (root)
   - **Build Command:** `cd frontend && yarn build`
   - **Output Directory:** `frontend/build`
   - **Install Command:** `cd frontend && yarn install`

4. **Add Environment Variables:**
   Click "Environment Variables" and add:
   
   **Key:** `REACT_APP_BACKEND_URL`
   **Value:** `https://career-portfolio-pm.preview.emergentagent.com`
   
   **Key:** `REACT_APP_MIXPANEL_TOKEN`
   **Value:** `a01ef34a6d82a6581d02a50250d947cc`

5. **Click "Deploy"**
   - Vercel will build and deploy your portfolio
   - Takes 2-3 minutes
   - You'll get a live URL like: `https://portfolio-dhruv-pandya.vercel.app`

---

### Method 2: Via Vercel CLI (Alternative)

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
   cd /app
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **portfolio-dhruv-pandya**
   - Directory with code? **./frontend**
   
4. **Set Environment Variables:**
   ```bash
   vercel env add REACT_APP_BACKEND_URL production
   # Enter: https://career-portfolio-pm.preview.emergentagent.com
   
   vercel env add REACT_APP_MIXPANEL_TOKEN production
   # Enter: a01ef34a6d82a6581d02a50250d947cc
   ```

5. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

---

## Step 3: Custom Domain (Optional)

1. **Buy a domain** (from Namecheap, GoDaddy, Google Domains, etc.)
   - Example: `dhruvpandya.com`

2. **Add to Vercel:**
   - Go to your project → Settings → Domains
   - Add your domain
   - Follow DNS configuration instructions

3. **Update DNS:**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Wait 5-10 minutes for propagation

---

## Step 4: Verify Deployment

1. **Open your Vercel URL**
2. **Test all features:**
   - ✅ Portfolio loads correctly
   - ✅ Click "View My Work" button
   - ✅ Click "Get In Touch" button
   - ✅ Expand experience cards
   - ✅ Click Email and LinkedIn
   - ✅ Check Mixpanel for events

3. **Check Browser Console:**
   - Press F12 → Console tab
   - Should see: "✅ Mixpanel Analytics Initialized"
   - No errors

---

## Troubleshooting

### Build Fails
- **Error:** "Command failed"
  - **Fix:** Check build logs in Vercel dashboard
  - Ensure `vercel.json` is in root directory

### Blank Page
- **Error:** White screen on deployment
  - **Fix:** Check browser console for errors
  - Verify `REACT_APP_BACKEND_URL` is set correctly
  - Make sure `outputDirectory` is `frontend/build`

### Mixpanel Not Working
- **Error:** Events not tracking
  - **Fix:** Add `REACT_APP_MIXPANEL_TOKEN` in Vercel environment variables
  - Redeploy after adding env vars

### 404 on Refresh
- **Error:** Page not found when refreshing
  - **Fix:** Already handled by `vercel.json` rewrites
  - If still happening, check vercel.json is deployed

---

## Continuous Deployment

Once set up, every time you push to GitHub:
1. Vercel automatically detects the push
2. Builds your portfolio
3. Deploys to production
4. You get a new URL for each deployment

**To push updates:**
```bash
cd /app
git add .
git commit -m "Update portfolio content"
git push
```

Vercel will automatically redeploy! 🚀

---

## Backend Note

Your backend is currently running at:
`https://career-portfolio-pm.preview.emergentagent.com`

This URL is set in the `REACT_APP_BACKEND_URL` environment variable.

**If you want to deploy the backend separately:**
- Consider Railway, Render, or Heroku for FastAPI
- Update `REACT_APP_BACKEND_URL` in Vercel to new backend URL

---

## Need Help?

If you encounter any issues:
1. Check Vercel deployment logs
2. Check browser console (F12)
3. Verify environment variables are set
4. Make sure GitHub repo is up to date

Your portfolio is ready to go live! 🎉
