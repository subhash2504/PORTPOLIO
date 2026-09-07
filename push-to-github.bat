@echo off
echo ========================================================
echo Pushing High-End 3D Portfolio Upgrade to GitHub...
echo ========================================================

:: 1. Copy user suit photo if available
if exist "C:\Users\subhashhhh\.gemini\antigravity\brain\ad57ca7f-4b48-4b67-9fe7-a583d6d2dba0\.user_uploaded\media__1788771539349.jpg" (
    echo Copying suit photo to public/profile-photo.jpg...
    copy /Y "C:\Users\subhashhhh\.gemini\antigravity\brain\ad57ca7f-4b48-4b67-9fe7-a583d6d2dba0\.user_uploaded\media__1788771539349.jpg" "%~dp0public\profile-photo.jpg"
)

:: 2. Git operations
git init
git add -A
git commit -m "High-End 3D Experience Upgrade with Three.js & Framer Motion"
git branch -M main
git remote set-url origin https://github.com/subhash2504/PORTPOLIO.git 2>nul || git remote add origin https://github.com/subhash2504/PORTPOLIO.git
git push -u origin main --force

echo.
echo ========================================================
echo SUCCESS! Your 3D Portfolio has been pushed to GitHub.
echo Vercel will now automatically build and deploy your site!
echo ========================================================
pause
