# Google Maps Reviews Integration Setup

## Environment Variables

Create a `.env` file in the project root with the following:

```env
# Google Places API Configuration
# Get your API key from: https://console.cloud.google.com/
# Enable "Places API" in Google Cloud Console
GOOGLE_API_KEY=your_google_api_key_here

# Google Place ID
# Find your Place ID at: https://developers.google.com/maps/documentation/places/web-service/place-id
# Or search your business on Google Maps and extract from URL
GOOGLE_PLACE_ID=your_place_id_here
```

## Setup Steps

1. **Get Google API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable "Places API"
   - Go to "Credentials" → "Create Credentials" → "API Key"
   - Restrict the key to "Places API" only for security

2. **Find Your Place ID:**
   - Use [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   - Or search your business on Google Maps
   - The Place ID is in the URL or you can use the Place ID Finder tool

3. **Add Environment Variables:**
   - Create `.env` file in project root
   - Add `GOOGLE_API_KEY` and `GOOGLE_PLACE_ID`
   - For Cloudflare Pages: Add these in Dashboard → Settings → Environment Variables

## How It Works

- The server-side API endpoint (`/api/reviews`) fetches reviews from Google Places API
- Client-side code automatically fetches reviews when the page loads
- Falls back to dummy data if API is not configured or fails
- Reviews are displayed in the Swiper carousel on the homepage

## Notes

- API key is kept secure on the server (never exposed to client)
- Free tier: 1,000 requests/day
- Reviews are cached by Google (updates may take time)
- If API fails, the site will use fallback dummy reviews

