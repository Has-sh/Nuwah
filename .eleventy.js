const fs = require("fs");

module.exports = function(eleventyConfig) {
  // Pass-through copy
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy({ "src/assets/img/favicon": "/" });
  eleventyConfig.addPassthroughCopy("src/assets/vid");

  // ✅ Add collection for packages
  eleventyConfig.addCollection("packages", function(collectionApi) {
    const dataPath = "./src/_data/packages.json";
    const jsonData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    return jsonData.packages.map(pkg => ({
      ...pkg,
      url: `/packages/${pkg.slug}/`
    }));
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
