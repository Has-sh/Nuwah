# Cloudflare Pages Build Configuration

## Current Issue
CSS is not minified in production because Cloudflare Pages is running `npx @11ty/eleventy` which doesn't minify assets.

## Solution
Update Cloudflare Pages build configuration:

**Build command:**
```
npm run build:minify
```

**Build output directory:**
```
_site
```

**Root directory:**
```
(leave empty or set to project root)
```

This will ensure CSS and JS are minified for production, saving ~23 KiB for CSS and improving performance scores.

## Alternative: Post-build Script
If you prefer to keep the current build command, you can add a post-build script in `package.json`:

```json
"scripts": {
  "build": "eleventy",
  "postbuild": "npm run minify",
  "build:minify": "npm run build && npm run minify",
  ...
}
```

Then Cloudflare Pages can continue using `npx @11ty/eleventy` and minification will happen automatically after build.

