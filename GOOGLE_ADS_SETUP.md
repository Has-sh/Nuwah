# Google Ads Setup Guide for Nuwah

## ✅ Technical Implementation Complete

All technical requirements for Google Ads have been implemented:

1. **Google Ads Conversion Tracking** - Added to `src/_includes/layout.njk`
2. **Schema.org Product Markup** - Added to:
   - `src/packages/package-detail.njk` (for packages)
   - `src/furnitures/furniture-detail.njk` (for furniture)
3. **Conversion Event Tracking** - Added to WhatsApp buttons on product pages

## 🔧 Setup Steps

### 1. Get Your Google Ads Conversion ID

1. Go to [Google Ads](https://ads.google.com/)
2. Navigate to **Tools & Settings** > **Conversions**
3. Click **+ New conversion action**
4. Choose **Website** as the source
5. Set up your conversion action (e.g., "WhatsApp Click", "Package Inquiry")
6. Copy your **Conversion ID** (format: `AW-XXXXXXXXXX`)

### 2. Update Conversion Tracking Code

1. Open `src/_includes/layout.njk`
2. Find the line: `gtag('config', 'AW-XXXXXXXXXX');`
3. Replace `AW-XXXXXXXXXX` with your actual Conversion ID
4. There are **two places** to update:
   - Line with `gtag('config', 'AW-XXXXXXXXXX');`
   - Line with `'send_to': 'AW-XXXXXXXXXX/' + conversionLabel,`

### 3. Get Your Conversion Labels

For each conversion action you create in Google Ads:

1. Go to **Tools & Settings** > **Conversions**
2. Click on your conversion action
3. Copy the **Conversion label** (format: `AbC-D_efG-h`)

### 4. Update Conversion Labels in Code

#### For Packages (`src/packages/package-detail.njk`):

Find this line (around line 645):
```javascript
window.trackGoogleAdsConversion('CONVERSION_LABEL', priceValue, 'AED');
```

Replace `'CONVERSION_LABEL'` with your actual conversion label (e.g., `'AbC-D_efG-h'`)

#### For Furniture (`src/furnitures/furniture-detail.njk`):

Find this line (around line 1010):
```javascript
window.trackGoogleAdsConversion('CONVERSION_LABEL', priceValue, 'AED');
```

Replace `'CONVERSION_LABEL'` with your actual conversion label

### 5. Set Up Google Merchant Center (For Shopping Ads)

If you want to run Shopping Ads:

1. Create account at [Google Merchant Center](https://merchants.google.com/)
2. Verify your website
3. Create a product feed (XML/CSV) with these fields:
   - `id` - Product slug (e.g., `marble-package`, `modern-sectional-sofa`)
   - `title` - Product name
   - `description` - Product description
   - `link` - Full URL (e.g., `https://nuwah.pages.dev/packages/marble-package/`)
   - `image_link` - Main product image URL
   - `price` - Price with currency (e.g., `16900.00 AED`)
   - `availability` - `in stock` or `out of stock`
   - `brand` - `Nuwah`
   - `condition` - `new`
   - `google_product_category` - Relevant category

### 6. Test Your Setup

1. **Test Conversion Tracking:**
   - Visit a package or furniture detail page
   - Open browser DevTools (F12) > Console
   - Click the WhatsApp button
   - Check console for any errors
   - Verify in Google Ads that conversions are being tracked

2. **Test Schema Markup:**
   - Use [Google's Rich Results Test](https://search.google.com/test/rich-results)
   - Enter your product page URL
   - Verify Product schema is detected correctly

3. **Test in Google Ads:**
   - Go to **Tools & Settings** > **Conversions**
   - Check that conversions are being recorded
   - Wait 24-48 hours for data to populate

## 📊 What's Being Tracked

### Conversion Events:
- **WhatsApp Button Clicks** on:
  - Package detail pages (`/packages/{slug}/`)
  - Furniture detail pages (`/furniture/{category}/{slug}/`)
- **Value Tracking**: Product price is automatically tracked with each conversion

### Product Schema:
- Product name, description, images
- Brand information (Nuwah)
- Pricing and availability
- Product ratings (for packages)

## 🎯 Next Steps

1. **Create Google Ads Campaigns:**
   - Shopping Campaigns (requires Merchant Center)
   - Search Campaigns (keyword-based)
   - Performance Max (automated)

2. **Set Up Conversion Goals:**
   - WhatsApp inquiries
   - Package views
   - Furniture views
   - Form submissions (if you add forms later)

3. **Monitor Performance:**
   - Track conversion rates
   - Optimize ad copy and keywords
   - Adjust bids based on performance

## 📝 Notes

- **Conversion ID**: Replace `AW-XXXXXXXXXX` in `layout.njk`
- **Conversion Labels**: Replace `CONVERSION_LABEL` in both detail page templates
- **Currency**: Currently set to `AED` (UAE Dirham)
- **Price Format**: Prices are automatically cleaned (commas and spaces removed) before tracking

## 🔒 Privacy & Compliance

- Google Ads tracking respects user privacy settings
- Consider adding a cookie consent banner if required in your region
- Review Google's [Privacy Policy](https://policies.google.com/privacy) requirements

## 🆘 Troubleshooting

**Conversions not tracking?**
- Check that Conversion ID is correct
- Verify conversion label matches exactly (case-sensitive)
- Check browser console for JavaScript errors
- Ensure ad blockers aren't blocking gtag.js

**Schema not showing in search?**
- Use Google's Rich Results Test to validate
- Check that JSON-LD is valid (no syntax errors)
- Wait 24-48 hours for Google to re-crawl your site

**Need help?**
- [Google Ads Help Center](https://support.google.com/google-ads)
- [Google Merchant Center Help](https://support.google.com/merchants)

