# Git Deployment Automation Script

# 1. Check if git is installed
$gitCheck = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitCheck) {
    Write-Host "=================================================================" -ForegroundColor Red
    Write-Host "GIT WAS NOT FOUND ON THIS SYSTEM" -ForegroundColor Yellow
    Write-Host "To deploy your website to GitHub Pages, please install Git first." -ForegroundColor Yellow
    Write-Host "=================================================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Option A (Recommended - Instant command):" -ForegroundColor Cyan
    Write-Host "  Run this command in a new PowerShell window (as Administrator):"
    Write-Host "  winget install --id Git.Git -e --source winget" -ForegroundColor Green
    Write-Host ""
    Write-Host "Option B (Manual):" -ForegroundColor Cyan
    Write-Host "  Download and run the installer from: https://git-scm.com/download/win"
    Write-Host ""
    Write-Host "After installation, restart your terminal and run this script again." -ForegroundColor Green
    Exit
}

# 2. Check if .git folder exists, if not initialize it
if (-not (Test-Path ".git")) {
    Write-Host "Initializing new Git repository..." -ForegroundColor Cyan
    git init
} else {
    Write-Host "Git repository already initialized." -ForegroundColor Cyan
}

# 3. Add files and commit
Write-Host "Staging files..." -ForegroundColor Cyan
git add .

Write-Host "Creating initial commit..." -ForegroundColor Cyan
git commit -m "Initial commit: Premium Apple-inspired interactive portfolio and resume website"

# 4. Configure branch
Write-Host "Renaming primary branch to 'main'..." -ForegroundColor Cyan
git branch -M main

# 5. Configure remote URL
$repoUrl = "https://github.com/pnapasson/pnapasson.github.io.git"
$existingRemote = git remote get-url origin 2>$null

if ($null -eq $existingRemote) {
    Write-Host "Adding remote origin: $repoUrl" -ForegroundColor Cyan
    git remote add origin $repoUrl
} else {
    if ($existingRemote -ne $repoUrl) {
        Write-Host "Updating remote origin to: $repoUrl" -ForegroundColor Cyan
        git remote set-url origin $repoUrl
    } else {
        Write-Host "Remote origin already configured correctly." -ForegroundColor Cyan
    }
}

# 6. Push to Remote Main
Write-Host "Pushing code to remote repository..." -ForegroundColor Yellow
Write-Host "Note: If prompted, please authorize GitHub credentials in the browser window." -ForegroundColor Gray
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================================" -ForegroundColor Green
    Write-Host "SUCCESS: Your resume website has been pushed to GitHub!" -ForegroundColor Green
    Write-Host "It will be live shortly at: https://pnapasson.github.io/" -ForegroundColor Green
    Write-Host "========================================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "ERROR: Push failed." -ForegroundColor Red
    Write-Host "Please check that your remote repository exists and you have access permissions." -ForegroundColor Yellow
}
