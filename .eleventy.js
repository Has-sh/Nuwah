const fs = require("fs");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy({ "src/assets/img/favicon": "/" });
  eleventyConfig.addPassthroughCopy("src/assets/vid");

  eleventyConfig.addCollection("packages", function() {
    const dataPath = "./src/_data/packages.json";
    if (fs.existsSync(dataPath)) {
      const jsonData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
      return jsonData.packages || [];
    }
    return [];
  });


  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
