# Google Maps Reviews Integration Setup

## Cloudflare Pages Environment Variables

Add these environment variables in your Cloudflare Pages dashboard:

1. Go to **Cloudflare Dashboard** → **Pages** → Your Project → **Settings** → **Environment Variables**
2. Add the following variables:

```
GOOGLE_API_KEY=your_google_api_key_here
GOOGLE_PLACE_ID=your_place_id_here
```

## Setup Steps

### 1. Get Google API Key:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable "Places API"
   - Go to "Credentials" → "Create Credentials" → "API Key"
   - **IMPORTANT**: Restrict the API key:
     - Go to "API restrictions" → Select "Restrict key" → Choose "Places API"
     - Go to "Application restrictions" → Select "HTTP referrers (web sites)"
     - Add your domain: `https://nuwah.pages.dev/*` (or your custom domain)
     - This prevents others from using your API key

### 2. Find Your Place ID:
   - Use [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   - Or search your business on Google Maps
   - The Place ID is in the URL or you can use the Place ID Finder tool

### 3. Add to Cloudflare Pages:
   - Go to Cloudflare Dashboard → Pages → Your Project
   - Settings → Environment Variables
   - Add `GOOGLE_API_KEY` and `GOOGLE_PLACE_ID`
   - Make sure to add them for **Production** environment
   - Redeploy your site after adding variables

## How It Works

- Environment variables are injected into the HTML during build time
- Client-side JavaScript calls Google Places API directly
- Falls back to dummy data if API is not configured or fails
- Reviews are displayed in the Swiper carousel on the homepage

## Security Notes

⚠️ **IMPORTANT**: Since the API key is exposed in client-side code:
- **ALWAYS restrict your API key** to specific HTTP referrers (your domain only)
- **ALWAYS restrict** the API key to "Places API" only
- Monitor your API usage in Google Cloud Console
- Free tier: 1,000 requests/day

## Notes

- Reviews are cached by Google (updates may take time)
- If API fails or is not configured, the site will use fallback dummy reviews
- The API key is visible in the page source, so proper restrictions are critical

