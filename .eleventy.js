module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addWatchTarget("src/assets/css/");

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
  };
};
