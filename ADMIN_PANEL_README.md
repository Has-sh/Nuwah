# Nuwah Admin Panel

## Overview
The admin panel allows you to dynamically manage all content on your website without editing code directly. It works entirely client-side and saves changes via GitHub API (perfect for Cloudflare Pages).

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build the Site**
   ```bash
   npm run build
   ```

3. **Access the Admin Panel**
   - **Local Development**: Open `_site/admin/index.html` in your browser
   - **Production**: Access at `https://nuwah.pages.dev/admin/` (or your domain)
   
   The admin panel works entirely client-side - no server required!

## Features

### Homepage Management
- Edit hero section (welcome text, tagline, description, buttons)
- Manage category sections (sofas, bathroom, living room, etc.)
- Update section titles and descriptions
- Change button links and text

### Packages Management
- View all packages
- Add new packages
- Edit package details (name, price, images, colors, room types)
- Delete packages

### Furniture Management
- View all furniture items
- Add new furniture
- Edit furniture details
- Delete furniture items

## How to Use

1. **Load Current Data**: The admin panel automatically loads data from JSON files
2. **Make Changes**: Edit any fields you want to change
3. **Save**: Click "Save" to save your changes:
   - **With GitHub Token**: Saves directly to GitHub repository (Cloudflare Pages will auto-rebuild)
   - **Without Token**: Downloads JSON file for manual upload
4. **Auto-Rebuild**: If using GitHub API, Cloudflare Pages will automatically rebuild after changes

## File Structure

The admin panel manages these JSON files:
- `src/_data/homepage.json` - All homepage content
- `src/_data/packages.json` - Package data
- `src/_data/furniture.json` - Furniture data

## Notes

- **No Server Required**: The admin panel works entirely client-side
- **GitHub Integration**: Saves changes via GitHub API (requires Fine-grained Personal Access Token)
- **Cloudflare Pages**: Automatically rebuilds when changes are pushed to GitHub
- **Static Files**: Loads data from `/_data/*.json` files
- **Fallback**: If GitHub API fails, downloads JSON files for manual upload

## GitHub Token Setup

1. Go to [GitHub Settings → Tokens](https://github.com/settings/tokens?type=beta)
2. Click "Generate new token" → "Generate new token (fine-grained)"
3. Name: "Nuwah Admin Panel"
4. Repository access: Select "Only select repositories" → Choose your repository
5. Permissions → Repository permissions:
   - **Contents: Read and write** (REQUIRED)
6. Generate token and enter it in the admin panel when prompted

## Troubleshooting

If you can't access the admin panel:
1. Make sure the site is built (`npm run build`)
2. Open `_site/admin/index.html` in your browser (local) or access via your deployed URL
3. Check browser console for any error messages
4. Verify JSON files exist in `src/_data/` directory

