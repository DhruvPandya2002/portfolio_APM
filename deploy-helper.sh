#!/bin/bash

echo "🚀 Portfolio Deployment Helper"
echo "=============================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - Portfolio ready for deployment"
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Create GitHub Repository:"
echo "   - Go to: https://github.com/new"
echo "   - Name: portfolio-dhruv-pandya"
echo "   - Don't initialize with README"
echo "   - Click 'Create repository'"
echo ""
echo "2. Push to GitHub:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/portfolio-dhruv-pandya.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Deploy to Vercel:"
echo "   - Go to: https://vercel.com/new"
echo "   - Import your GitHub repo"
echo "   - Add environment variables:"
echo "     • REACT_APP_BACKEND_URL = https://career-portfolio-pm.preview.emergentagent.com"
echo "     • REACT_APP_MIXPANEL_TOKEN = a01ef34a6d82a6581d02a50250d947cc"
echo "   - Click Deploy!"
echo ""
echo "📚 Full guide: /app/DEPLOYMENT_GUIDE.md"
echo ""
