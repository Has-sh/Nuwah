# TODO: Replace All Placeholders and Configuration Values

This document lists all placeholders, hardcoded values, and configuration items that need to be replaced before going live.

---

## 🔴 CRITICAL - Google Ads & Analytics

### Google Ads Conversion Tracking
**File:** `src/_includes/layout.njk`
- **Line 237:** `AW-XXXXXXXXXX` → Replace with your Google Ads Conversion ID
- **Line 242:** `AW-XXXXXXXXXX` → Replace with your Google Ads Conversion ID  
- **Line 248:** `AW-XXXXXXXXXX` → Replace with your Google Ads Conversion ID

**File:** `src/packages/package-detail.njk`
- **Line ~686:** `'CONVERSION_LABEL'` → Replace with your actual conversion label from Google Ads

**File:** `src/furnitures/furniture-detail.njk`
- **Line ~1062:** `'CONVERSION_LABEL'` → Replace with your actual conversion label from Google Ads

### Google Analytics
**File:** `src/_includes/layout.njk`
- **Line 259:** `G-XXXXXXXXXX` → Replace with your Google Analytics tracking ID (uncomment when ready)
- **Line 264:** `G-XXXXXXXXXX` → Replace with your Google Analytics tracking ID (uncomment when ready)

---

## 🔴 CRITICAL - Contact Information

### Phone Numbers
**File:** `src/_includes/layout.njk`
- **Line 91:** `"+971-XX-XXX-XXXX"` → Replace with actual business phone number

**File:** `src/packages/package-detail.njk`
- **Line ~696:** `971XXXXXXXXX` → Replace with actual WhatsApp number (format: 971XXXXXXXXX, no + or spaces)

**File:** `src/furnitures/furniture-detail.njk`
- **Line ~1071:** `971XXXXXXXXX` → Replace with actual WhatsApp number (format: 971XXXXXXXXX, no + or spaces)

**File:** `src/assets/js/script.js`
- **Line 753:** `'971501234567'` → Replace with actual WhatsApp number

### Contact Information in JSON Files
**File:** `src/_data/contact.json`
- **Line 19:** `"773-365-1240"` → Replace with actual phone number
- **Line 24:** `"office@steponetrans.com"` → Replace with actual email address
- **Line 29:** `"1425 N McLean Blvd, Elgin, IL"` → Replace with actual business address
- **Line 51:** Google Maps embed URL → Replace with your business location embed URL

**File:** `src/_data/homepage.json`
- **Line 480:** `"172-11 65th Ave, Flushing, NY<br>11365, USA."` → Replace with actual address
- **Line 481:** `"+1 (234) 567 89 00"` → Replace with actual phone number
- **Line 482:** `"nuwah@email.com"` → Replace with actual email address

---

## 🔴 CRITICAL - Social Media Links

### Social Media URLs
**File:** `src/_includes/layout.njk`
- **Line 98:** `"https://www.instagram.com/nuwah"` → Replace with actual Instagram URL
- **Line 99:** `"https://www.facebook.com/nuwah"` → Replace with actual Facebook URL
- **Line 100:** `"https://www.twitter.com/nuwah"` → Replace with actual Twitter/X URL
- **Line 114:** `"https://www.instagram.com/nuwah"` → Replace with actual Instagram URL
- **Line 115:** `"https://www.facebook.com/nuwah"` → Replace with actual Facebook URL
- **Line 116:** `"https://www.twitter.com/nuwah"` → Replace with actual Twitter/X URL

**File:** `src/_includes/layout.njk` (Footer)
- **Line 200:** `href="#"` → Replace with actual Facebook URL
- **Line 203:** `href="#"` → Replace with actual Instagram URL
- **Line 206:** `href="#"` → Replace with actual YouTube URL

---

## 🟡 IMPORTANT - Google Services

### Google Site Verification
**File:** `src/_includes/layout.njk`
- **Line 25:** `LtKMOWbD_y36ykH_--7vlCKDuHZP9O5RlZo8Zu-vxe8` → Verify this is your actual Google Search Console verification code

### Google Maps API (Environment Variables)
**Cloudflare Pages Environment Variables:**
- `GOOGLE_API_KEY` → Set in Cloudflare Pages dashboard
- `GOOGLE_PLACE_ID` → Set in Cloudflare Pages dashboard

**Note:** These are injected via `src/_includes/layout.njk` lines 228-229

---

## 🟡 IMPORTANT - Business Information

### Business Address (Schema.org)
**File:** `src/_includes/layout.njk`
- **Line 87-89:** Update address details if different from current:
  - `"addressCountry": "AE"` → Verify correct country code
  - `"addressLocality": "Dubai"` → Verify city
  - `"addressRegion": "Dubai"` → Verify region/emirate

### Site Configuration
**File:** `src/_data/site.json`
- **Line 2:** `"https://nuwah.pages.dev"` → Update if using custom domain
- **Line 3:** `"Nuwah"` → Verify business name
- **Line 4:** `"Premium interior design studio in Dubai, UAE"` → Update description if needed

---

## 🟡 IMPORTANT - Test/Placeholder Content

### Test Project
**File:** `src/_data/projects.json`
- **Lines 102-162:** Remove or update the "test-project" entry before going live
  - Currently contains test data: "Test Project", "Test Category", "Test Client", etc.

### Placeholder Images
**File:** `src/assets/js/script.js`
- **Line 905:** `'https://via.placeholder.com/50'` → Fallback for missing review images (can keep)
- **Line 949:** `'https://via.placeholder.com/50'` → Fallback for missing review images (can keep)

**File:** `src/admin.html`
- **Line 831:** `'https://via.placeholder.com/100'` → Fallback for missing images (can keep)
- **Line 1181:** `'https://via.placeholder.com/100'` → Fallback for missing images (can keep)
- **Line 1223:** `'https://via.placeholder.com/100'` → Fallback for missing images (can keep)

---

## 🟢 OPTIONAL - Footer & Branding

### Footer Copyright
**File:** `src/_includes/layout.njk`
- **Line 213:** `© Created by Einzcare &nbsp;&nbsp; All rights reserved` → Update copyright text if needed

### Footer Navigation Links
**File:** `src/_includes/layout.njk`
- **Lines 190-194:** Footer navigation links point to `#about`, `#services`, etc.
  - Update these to actual page URLs or remove if not needed:
    - `#about` → Update or remove
    - `#services` → Update or remove
    - `#pricing` → Update or remove
    - `#testimonials` → Update or remove
    - `#contact` → Update or remove

---

## 🟢 OPTIONAL - Functionality Placeholders

### Placeholder Functions
**File:** `src/furnitures/furniture-detail.njk`
- **Line 1202:** `// Add to cart functionality (placeholder)` → Implement if needed
- **Line 1208:** `// Buy now functionality (placeholder)` → Implement if needed

**Note:** These are commented out in the UI but the code placeholders exist.

---

## 📋 Summary Checklist

### Before Going Live:

- [ ] Replace all Google Ads Conversion IDs (`AW-XXXXXXXXXX`)
- [ ] Replace all Google Ads Conversion Labels (`CONVERSION_LABEL`)
- [ ] Set up Google Analytics and uncomment tracking code
- [ ] Replace all phone numbers (WhatsApp and business)
- [ ] Replace all email addresses
- [ ] Replace all business addresses
- [ ] Replace all social media links (Instagram, Facebook, Twitter/X, YouTube)
- [ ] Update Google Maps embed URL in contact page
- [ ] Verify Google Site Verification code
- [ ] Set Google API Key and Place ID in Cloudflare Pages
- [ ] Remove or update test project from `projects.json`
- [ ] Update footer copyright if needed
- [ ] Update footer navigation links or remove if not needed
- [ ] Verify business address in Schema.org markup
- [ ] Update site URL in `site.json` if using custom domain

---

## 🔍 How to Find Values

### Google Ads Conversion ID:
1. Go to Google Ads → Tools & Settings → Conversions
2. Create conversion action → Copy Conversion ID (format: `AW-XXXXXXXXXX`)

### Google Ads Conversion Label:
1. Go to Google Ads → Tools & Settings → Conversions
2. Click on your conversion action → Copy Conversion Label (format: `AbC-D_efG-h`)

### Google Analytics Tracking ID:
1. Go to Google Analytics → Admin → Property Settings
2. Copy Measurement ID (format: `G-XXXXXXXXXX`)

### Google Maps Embed URL:
1. Go to Google Maps → Search your business
2. Click Share → Embed a map → Copy iframe src URL

### Google Place ID:
1. Use [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Or search your business on Google Maps and extract from URL

---

## 📝 Notes

- All placeholders are marked with clear indicators (XXXX, placeholder text, etc.)
- Some fallback images (`via.placeholder.com`) are acceptable to keep
- Test project should be removed before production
- Environment variables must be set in Cloudflare Pages dashboard
- Social media links in footer currently point to `#` (placeholder)

---

**Last Updated:** Generated automatically from codebase scan
**Total Items to Replace:** ~35+ placeholders and configuration values

