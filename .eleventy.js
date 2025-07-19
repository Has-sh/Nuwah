const fs = require("fs");

module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy({ "src/assets/img/favicon": "/" });
  eleventyConfig.addPassthroughCopy("src/assets/vid");

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

  // Development server options
  eleventyConfig.setServerOptions({
    showAllHosts: true,
    port: 8080
  });

  // Watch for changes in data files
  eleventyConfig.addWatchTarget("./src/_data/");

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