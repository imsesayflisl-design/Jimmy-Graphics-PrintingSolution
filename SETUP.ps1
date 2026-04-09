#!/usr/bin/env powershell
# Jimmy Graphics Printing Solution - Quick Start Guide

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Jimmy Graphics Printing Solution" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
$websiteDir = Get-Location

if (-not (Test-Path "$websiteDir/home.html")) {
    Write-Host "❌ Error: home.html not found in current directory" -ForegroundColor Red
    Write-Host "Please navigate to the website folder first" -ForegroundColor Yellow
    exit
}

Write-Host "✅ Website files found!" -ForegroundColor Green
Write-Host ""
Write-Host "📁 Project Structure:" -ForegroundColor Cyan
Get-ChildItem -Path $websiteDir | Where-Object { $_.PSIsContainer -or $_.Extension -eq ".html" } | ForEach-Object {
    if ($_.PSIsContainer) {
        Write-Host "   📂 $($_.Name)/"
    } else {
        Write-Host "   📄 $($_.Name)"
    }
}
Write-Host ""
Write-Host "🚀 Quick Start Options:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1️⃣  Direct Browser Open" -ForegroundColor Yellow
Write-Host "   Double-click 'home.html' to open in your default browser"
Write-Host ""
Write-Host "2️⃣  Python Local Server (Python 3)" -ForegroundColor Yellow
Write-Host "   python -m http.server 8000" -ForegroundColor White
Write-Host "   Then open: http://localhost:8000"
Write-Host ""
Write-Host "3️⃣  Node.js Local Server" -ForegroundColor Yellow
Write-Host "   npx http-server" -ForegroundColor White
Write-Host ""

Write-Host "📋 Files Overview:" -ForegroundColor Cyan
Write-Host "   • home.html      - Main landing page" -ForegroundColor White
Write-Host "   • about.html     - About the agency" -ForegroundColor White
Write-Host "   • services.html  - Service offerings" -ForegroundColor White
Write-Host "   • portfolio.html - Project showcase" -ForegroundColor White
Write-Host "   • contact.html   - Contact form" -ForegroundColor White
Write-Host "   • css/style.css  - Styling (655 lines)" -ForegroundColor White
Write-Host "   • js/script.js   - Functionality" -ForegroundColor White
Write-Host ""

Write-Host "🎨 Color Scheme:" -ForegroundColor Cyan
Write-Host "   • Primary Pink:   #ff1493" -ForegroundColor Magenta
Write-Host "   • Primary Purple: #a855f7" -ForegroundColor Blue
Write-Host "   • Cyan:           #06b6d4" -ForegroundColor Cyan
Write-Host "   • Dark BG:        #0f0f0f" -ForegroundColor DarkGray
Write-Host ""

Write-Host "📱 Responsive Design:" -ForegroundColor Cyan
Write-Host "   ✓ Desktop (1024px+)" -ForegroundColor Green
Write-Host "   ✓ Tablet (768px-1023px)" -ForegroundColor Green
Write-Host "   ✓ Mobile (320px-767px)" -ForegroundColor Green
Write-Host ""

Write-Host "🎯 Key Features:" -ForegroundColor Cyan
Write-Host "   ✓ Dark modern theme" -ForegroundColor Green
Write-Host "   ✓ Animated hero section" -ForegroundColor Green
Write-Host "   ✓ Mobile hamburger menu" -ForegroundColor Green
Write-Host "   ✓ Contact form with validation" -ForegroundColor Green
Write-Host "   ✓ Testimonial carousel" -ForegroundColor Green
Write-Host "   ✓ Portfolio showcase" -ForegroundColor Green
Write-Host "   ✓ Smooth scroll animations" -ForegroundColor Green
Write-Host "   ✓ Fully responsive" -ForegroundColor Green
Write-Host ""

Write-Host "✨ Next Steps:" -ForegroundColor Cyan
Write-Host "   1. Open home.html in your browser" -ForegroundColor White
Write-Host "   2. Review the website layout" -ForegroundColor White
Write-Host "   3. Customize colors and content as needed" -ForegroundColor White
Write-Host "   4. Add your own images to the images/ folder" -ForegroundColor White
Write-Host "   5. Update contact information" -ForegroundColor White
Write-Host "   6. Deploy to your hosting" -ForegroundColor White
Write-Host ""

Write-Host "📚 Documentation:" -ForegroundColor Cyan
Write-Host "   • README.md - Full documentation" -ForegroundColor White
Write-Host "   • REBUILD_SUMMARY.md - What was changed" -ForegroundColor White
Write-Host ""

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "✅ Setup Complete! Enjoy your website!" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
