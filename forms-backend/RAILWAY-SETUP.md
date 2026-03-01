# Railway Setup Guide — bitcoin.rocks Forms Backend

This guide walks you through deploying the forms backend as a separate Railway service alongside your existing bitcoin.rocks static site.

## Overview

The forms backend is a Node.js/Express app that:
- Receives form submissions from your website
- Stores them in a SQLite database
- Provides an admin panel to view, export CSV, and delete submissions
- Supports multiple user accounts with per-form access control

## Step 1: Create a New Railway Service

1. Go to your Railway project dashboard (where bitcoin.rocks is hosted)
2. Click **"+ New"** → **"Service"** → **"GitHub Repo"**
3. Select the same `sovenor/bitcoin-rocks` repository
4. Railway will detect the repo — you need to configure it to use the forms backend

## Step 2: Configure the Service

### Root Directory
In the service settings, set the **Root Directory** to:
```
forms-backend
```
This tells Railway to only look at the `forms-backend/` folder for this service.

### Build & Start Commands
If Railway doesn't auto-detect from nixpacks.toml, set manually:
- **Build Command**: `npm install`
- **Start Command**: `node seed.js && node server.js`

## Step 3: Add a Persistent Volume

**Important:** Without a persistent volume, your database will be lost on every deploy!

1. In the forms backend service, go to **Settings** → **Volumes**
2. Click **"+ Add Volume"**
3. Set the mount path to: `/data`
4. This gives you persistent storage for the SQLite database

## Step 4: Set Environment Variables

In the service's **Variables** tab, add these:

| Variable | Value | Notes |
|----------|-------|-------|
| `ADMIN_USERNAME` | `your-username` | First admin account username |
| `ADMIN_PASSWORD` | `your-strong-password` | First admin account password (min 8 chars) |
| `SESSION_SECRET` | `random-string-at-least-32-chars` | Generate a random string for session encryption |
| `SITE_URL` | `https://bitcoin.rocks` | Your main site URL (no trailing slash) |
| `DB_PATH` | `/data/forms.db` | Points to the persistent volume |
| `NODE_ENV` | `production` | Enables secure cookies |

### Generate a Session Secret
Run this in your terminal to generate a random string:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Step 5: Set Up Custom Domain (Optional but Recommended)

1. In the service settings, go to **Settings** → **Networking** → **Public Networking**
2. Click **"Generate Domain"** to get a `.railway.app` domain
3. Or add a custom domain like `forms.bitcoin.rocks`

### DNS Setup for Custom Domain
Add a CNAME record in your DNS settings:
```
forms.bitcoin.rocks → your-service.railway.app
```

## Step 6: Deploy

1. Push your code to GitHub
2. Railway will automatically deploy the forms backend service
3. Visit `https://your-domain/admin/login` to log in with your admin credentials
4. Visit `https://your-domain/health` to verify the service is running

## Step 7: Update Your Website Forms

After deploying, update the form `action` URLs in your HTML files.

Replace `https://forms.bitcoin.rocks` in these files with your actual Railway URL (e.g., `https://forms.bitcoin.rocks` or `https://your-service.railway.app`):

- `stickers.html`
- `sticker-files/index.html`
- `business/stickers.html`
- `business/maps.html`

The form action URLs are already updated to use placeholder `https://forms.bitcoin.rocks` — just do a find-and-replace across these files.

## Maintenance

### Adding New Forms
1. Log in to the admin panel
2. Scroll to the "Add New Form" section on the dashboard
3. Fill in the slug, name, fields, and success redirect URL
4. The form is immediately available at `/submit/{slug}`

### Managing Users
1. Log in as an admin
2. Click "Users" in the navbar
3. Create new users and assign which forms they can access

### Backups
The SQLite database file is at `/data/forms.db` on the persistent volume. Railway doesn't provide built-in backup for volumes, so consider:
- Regularly exporting CSV files for important data
- Using Railway's volume snapshots if available

### Monitoring
- Health check endpoint: `https://your-domain/health`
- Railway provides built-in logging in the service dashboard

## Troubleshooting

### "Invalid username or password"
- Make sure you set `ADMIN_USERNAME` and `ADMIN_PASSWORD` environment variables before the first deploy
- If you need to reset, delete the database file from the volume and redeploy

### Forms not redirecting to success pages
- Verify `SITE_URL` is set correctly (no trailing slash)
- Check that the success pages exist on your main site

### "Already Submitted" error
- Rate limit is 1 submission per form per IP per 24 hours
- This is by design to prevent spam

### Database lost after deploy
- Make sure you have a persistent volume mounted at `/data`
- Make sure `DB_PATH` environment variable is set to `/data/forms.db`
