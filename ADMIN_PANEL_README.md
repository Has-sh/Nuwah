# Nuwah Admin Panel

## Overview
The admin panel allows you to dynamically manage all content on your website without editing code directly.

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Unified Server**
   ```bash
   npm start
   ```

3. **Access the Admin Panel**
   Open your browser and navigate to:
   ```
   http://localhost:8080/admin/
   ```

   The admin panel is now integrated into the main server, so you can access:
   - Main site: `http://localhost:8080/`
   - Admin panel: `http://localhost:8080/admin/`
   - API endpoints: `http://localhost:8080/api/*`

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

1. **Load Current Data**: Click "Load Current Data" to see what's currently on your site
2. **Make Changes**: Edit any fields you want to change
3. **Save**: Click "Save" to save your changes directly to the JSON files
4. **Rebuild Site**: After saving, rebuild your Eleventy site:
   ```bash
   npm run build
   ```

## File Structure

The admin panel manages these JSON files:
- `src/_data/homepage.json` - All homepage content
- `src/_data/packages.json` - Package data
- `src/_data/furniture.json` - Furniture data

## Notes

- Changes are saved directly to the JSON files
- The server automatically rebuilds the site when you save changes
- Everything runs on port 8080 (unified server)
- The server watches for file changes and rebuilds automatically

## Troubleshooting

If you can't access the admin panel:
1. Make sure the server is running (`npm start`)
2. Check that port 8080 is not in use
3. Verify dependencies are installed (`npm install`)
4. Check the console for any error messages

