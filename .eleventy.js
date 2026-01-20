const fs = require("fs");

module.exports = function(eleventyConfig) {
  // Make environment variables available to templates
  eleventyConfig.addGlobalData("env", process.env);
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy({ "src/assets/img/favicon": "/" });
  eleventyConfig.addPassthroughCopy("src/assets/vid");
  // Copy _headers file for Cloudflare Pages
  eleventyConfig.addPassthroughCopy("src/_headers");
  
  // Copy data files for admin panel access on Cloudflare Pages
  // Copy specific JSON files to _data directory in output
  eleventyConfig.addPassthroughCopy({ "src/_data/packages.json": "_data/packages.json" });
  eleventyConfig.addPassthroughCopy({ "src/_data/products.json": "_data/products.json" });
  eleventyConfig.addPassthroughCopy({ "src/_data/furniture.json": "_data/furniture.json" });
  eleventyConfig.addPassthroughCopy({ "src/_data/projects.json": "_data/projects.json" });
  eleventyConfig.addPassthroughCopy({ "src/_data/homepage.json": "_data/homepage.json" });
  eleventyConfig.addPassthroughCopy({ "src/_data/designServices.json": "_data/designServices.json" });
  eleventyConfig.addPassthroughCopy({ "src/_data/contact.json": "_data/contact.json" });

  // Add packages collection
  eleventyConfig.addCollection("packages", function(collectionApi) {
    const dataPath = "./src/_data/packages.json";
    if (fs.existsSync(dataPath)) {
      const jsonData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
      return jsonData.packages || [];
    }
    return [];
  });

  // Add furniture collection (if you need it as a collection)
  eleventyConfig.addCollection("furniture", function(collectionApi) {
  const dataPath = "./src/_data/furniture.json";
  if (fs.existsSync(dataPath)) {
    try {
      const jsonData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
      return jsonData;
    } catch (error) {
      console.error("Error parsing furniture.json:", error);
      return [];
    }
  }
  return [];
});

eleventyConfig.addCollection("projects", function (collectionApi) {
  const dataPath = "./src/_data/projects.json";
  if (fs.existsSync(dataPath)) {
    try {
      const jsonData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
      return jsonData.projects || [];
    } catch (error) {
      console.error("Error parsing projects.json:", error);
      return [];
    }
  }
  return [];
});

  eleventyConfig.addFilter("capitalize", function(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  eleventyConfig.addFilter("slugify", function(str) {
    if (!str) return "";
    return str
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '') // Remove special characters
      .replace(/\s+/g, '-')        // Replace spaces with hyphens
      .replace(/-+/g, '-')         // Replace multiple hyphens with single
      .trim('-');                  // Remove leading/trailing hyphens
  });

  // Date filter for sitemap and general use
  eleventyConfig.addFilter("date", function(date, format) {
    if (!date) return "";
    const d = date === "now" ? new Date() : new Date(date);
    if (isNaN(d.getTime())) return "";
    
    if (format === "%Y-%m-%d") {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    // Default to ISO format
    return d.toISOString().split('T')[0];
  });
  
  // Keep dateFormat for backward compatibility
  eleventyConfig.addFilter("dateFormat", function(date, format) {
    if (!date) return "";
    const d = date === "now" ? new Date() : new Date(date);
    if (isNaN(d.getTime())) return "";
    
    if (format === "YYYY-MM-DD") {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    return d.toISOString().split('T')[0];
  });

  // Calculate minimum current price from all colors and roomTypes
  eleventyConfig.addFilter("minPackagePrice", function(pkg) {
    if (!pkg) return "0";
    const prices = [];
    
    // Get prices from all colors
    if (pkg.colors && Array.isArray(pkg.colors)) {
      pkg.colors.forEach(color => {
        if (color.currentPrice) {
          const price = parseFloat(color.currentPrice.replace(/,/g, ''));
          if (!isNaN(price)) prices.push(price);
        }
      });
    }
    
    // Get prices from all roomTypes
    if (pkg.roomTypes && Array.isArray(pkg.roomTypes)) {
      pkg.roomTypes.forEach(room => {
        if (room.currentPrice) {
          const price = parseFloat(room.currentPrice.replace(/,/g, ''));
          if (!isNaN(price)) prices.push(price);
        }
      });
    }
    
    if (prices.length === 0) return pkg.currentPrice || "0";
    const minPrice = Math.min(...prices);
    return minPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  });

  // Calculate minimum original price from all colors and roomTypes
  eleventyConfig.addFilter("minPackageOriginalPrice", function(pkg) {
    if (!pkg) return "0";
    const prices = [];
    
    // Get prices from all colors
    if (pkg.colors && Array.isArray(pkg.colors)) {
      pkg.colors.forEach(color => {
        if (color.originalPrice) {
          const price = parseFloat(color.originalPrice.replace(/,/g, ''));
          if (!isNaN(price)) prices.push(price);
        }
      });
    }
    
    // Get prices from all roomTypes
    if (pkg.roomTypes && Array.isArray(pkg.roomTypes)) {
      pkg.roomTypes.forEach(room => {
        if (room.originalPrice) {
          const price = parseFloat(room.originalPrice.replace(/,/g, ''));
          if (!isNaN(price)) prices.push(price);
        }
      });
    }
    
    if (prices.length === 0) return pkg.originalPrice || "0";
    const minPrice = Math.min(...prices);
    return minPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  });

  // Get minimum price from products.json for a furniture item by slug
  eleventyConfig.addFilter("minFurniturePrice", function(furnitureItem) {
    if (!furnitureItem) return "0";
    
    let minPrice = furnitureItem.price || 0;
    
    // Load products.json
    const productsPath = "./src/_data/products.json";
    if (fs.existsSync(productsPath)) {
      try {
        const productsData = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
        const matchingProduct = productsData.products?.find(p => p.slug === furnitureItem.slug);
        
        if (matchingProduct && matchingProduct.colorOptions && Array.isArray(matchingProduct.colorOptions)) {
          const prices = matchingProduct.colorOptions
            .map(opt => {
              if (opt.price) {
                return parseFloat(opt.price.replace(/,/g, ''));
              }
              return null;
            })
            .filter(p => p !== null && !isNaN(p));
          
          if (prices.length > 0) {
            minPrice = Math.min(...prices);
          }
        }
      } catch (error) {
        console.error("Error reading products.json:", error);
      }
    }
    
    // Format with commas
    return minPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  });

  // Get sale percentage from packages.json (from colors or roomTypes)
  eleventyConfig.addFilter("getPackageSalePercentage", function(pkg) {
    if (!pkg) return '';
    
    // First check colors for salePercentage
    if (pkg.colors && Array.isArray(pkg.colors)) {
      for (const color of pkg.colors) {
        if (color.salePercentage && color.salePercentage.trim() !== '') {
          return color.salePercentage;
        }
      }
    }
    
    // Then check roomTypes for salePercentage
    if (pkg.roomTypes && Array.isArray(pkg.roomTypes)) {
      for (const room of pkg.roomTypes) {
        if (room.salePercentage && room.salePercentage.trim() !== '') {
          return room.salePercentage;
        }
      }
    }
    
    return '';
  });

  // Get minimum original price from products.json for a furniture item by slug
  eleventyConfig.addFilter("minFurnitureOriginalPrice", function(furnitureItem) {
    if (!furnitureItem) return null;
    
    // Load products.json
    const productsPath = "./src/_data/products.json";
    if (fs.existsSync(productsPath)) {
      try {
        const productsData = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
        const matchingProduct = productsData.products?.find(p => p.slug === furnitureItem.slug);
        
        if (matchingProduct && matchingProduct.colorOptions && Array.isArray(matchingProduct.colorOptions)) {
          const prices = matchingProduct.colorOptions
            .map(opt => {
              if (opt.originalPrice) {
                return parseFloat(opt.originalPrice.replace(/,/g, ''));
              }
              return null;
            })
            .filter(p => p !== null && !isNaN(p));
          
          if (prices.length > 0) {
            const minPrice = Math.min(...prices);
            return minPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          }
        }
      } catch (error) {
        console.error("Error reading products.json:", error);
      }
    }
    
    return null;
  });

  // Get sale percentage from products.json for a furniture item by slug
  eleventyConfig.addFilter("getFurnitureSalePercentage", function(furnitureItem) {
    if (!furnitureItem || !furnitureItem.slug) return '';
    
    // First check if furniture item has salePercentage directly
    if (furnitureItem.salePercentage) {
      return furnitureItem.salePercentage;
    }
    
    // Load products.json
    const productsPath = "./src/_data/products.json";
    if (fs.existsSync(productsPath)) {
      try {
        const productsData = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
        const matchingProduct = productsData.products?.find(p => p.slug === furnitureItem.slug);
        
        if (matchingProduct && matchingProduct.colorOptions && Array.isArray(matchingProduct.colorOptions)) {
          // Find first colorOption with a salePercentage
          for (const colorOpt of matchingProduct.colorOptions) {
            if (colorOpt.salePercentage && colorOpt.salePercentage.trim() !== '') {
              return colorOpt.salePercentage;
            }
          }
        }
      } catch (error) {
        console.error("Error reading products.json:", error);
      }
    }
    
    return '';
  });

  // Get product image from products.json for a furniture item by slug
  eleventyConfig.addFilter("getFurnitureProductImage", function(furnitureItem) {
    if (!furnitureItem || !furnitureItem.slug) return '/assets/img/footer-logo-Photoroom.png';
    
    // Load products.json
    const productsPath = "./src/_data/products.json";
    if (fs.existsSync(productsPath)) {
      try {
        const productsData = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
        const matchingProduct = productsData.products?.find(p => p.slug === furnitureItem.slug);
        
        if (matchingProduct && matchingProduct.colorOptions && Array.isArray(matchingProduct.colorOptions) && matchingProduct.colorOptions.length > 0) {
          // First, try to find a colorOption with a showcaseImage
          for (const colorOpt of matchingProduct.colorOptions) {
            if (colorOpt.showcaseImage) {
              return colorOpt.showcaseImage;
            }
          }
          // If no showcase image, try first colorOption's main image
          if (matchingProduct.colorOptions[0].image) {
            return matchingProduct.colorOptions[0].image;
          }
          // If no main image, try first gallery image
          if (matchingProduct.colorOptions[0].gallery && matchingProduct.colorOptions[0].gallery.length > 0) {
            return matchingProduct.colorOptions[0].gallery[0];
          }
        }
      } catch (error) {
        console.error("Error reading products.json:", error);
      }
    }
    
    return '/assets/img/footer-logo-Photoroom.png';
  });

  // Get product colorOptions from products.json for a furniture item by slug
  eleventyConfig.addFilter("getFurnitureProductColorOptions", function(furnitureItem) {
    if (!furnitureItem || !furnitureItem.slug) return [];
    
    // Load products.json
    const productsPath = "./src/_data/products.json";
    if (fs.existsSync(productsPath)) {
      try {
        const productsData = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
        const matchingProduct = productsData.products?.find(p => p.slug === furnitureItem.slug);
        
        if (matchingProduct && matchingProduct.colorOptions && Array.isArray(matchingProduct.colorOptions)) {
          return matchingProduct.colorOptions;
        }
      } catch (error) {
        console.error("Error reading products.json:", error);
      }
    }
    
    return [];
  });

  // Clean sitemap.xml - remove any injected script tags to ensure valid XML
  eleventyConfig.addTransform("cleanSitemap", function(content, outputPath) {
    if (outputPath && outputPath.endsWith("sitemap.xml")) {
      // Remove any script tags that might be injected
      content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
      content = content.replace(/<script[^>]*\/>/gi, '');
      // Ensure clean XML structure
      return content.trim();
    }
    return content;
  });

  // Development server options
  eleventyConfig.setServerOptions({
    showAllHosts: true,
    port: 8080
  });

  // Note: Eleventy automatically watches data files in _data directory, no need to add watch target

  // Enable quiet mode to reduce console output
  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    // Set template formats
    templateFormats: ["md", "njk", "html"],
    // Set default template engine for markdown files
    markdownTemplateEngine: "njk",
    // Set default template engine for HTML files
    htmlTemplateEngine: "njk"
  };
};