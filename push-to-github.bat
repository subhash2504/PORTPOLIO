@echo off
echo ========================================================
echo Pushing Dulipudi Subhash Portfolio to GitHub...
echo ========================================================

:: 1. Copy user photo if available
if exist "C:\Users\subhashhhh\.gemini\antigravity\brain\ad57ca7f-4b48-4b67-9fe7-a583d6d2dba0\.user_uploaded\media__1788771539349.jpg" (
    echo Copying suit photo to public/profile-photo.jpg...
    copy /Y "C:\Users\subhashhhh\.gemini\antigravity\brain\ad57ca7f-4b48-4b67-9fe7-a583d6d2dba0\.user_uploaded\media__1788771539349.jpg" "%~dp0public\profile-photo.jpg"
)

:: 2. Initialize Git if not initialized
git init

:: 3. Add all files
git add -A

:: 4. Commit changes
git commit -m "Deploy Dulipudi Subhash Portfolio Codebase"

:: 5. Rename branch to main
git branch -M main

:: 6. Set remote origin
git remote remove origin 2>nul
git remote add origin https://github.com/subhash2504/PORTPOLIO.git

:: 7. Force push to main
echo Pushing to https://github.com/subhash2504/PORTPOLIO.git ...
git push -u origin main --force

echo.
echo ========================================================
echo SUCCESS! Your portfolio has been pushed to GitHub.
echo Vercel will now automatically build and publish your site!
echo ========================================================
pause
