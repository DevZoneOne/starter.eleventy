const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const eleventyRssPlugin = require("@11ty/eleventy-plugin-rss");
const {
  EleventyRenderPlugin,
  EleventyHtmlBasePlugin,
} = require("@11ty/eleventy");
const { minify, prettify } = require("./src/transforms");
const { year } = require("./src/shortcodes");
const { htmlDateString } = require("./src/filters");

module.exports = function (eleventyConfig) {
  let buildMode;
  // events
  eleventyConfig.on("eleventy.before", async ({ runMode }) => {
    buildMode = runMode === "build";
  });
  // filters
  eleventyConfig.addFilter("htmlDateString", htmlDateString);
  // plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyRssPlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  // static
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  // shortcodes
  eleventyConfig.addShortcode("year", year);
  // transform
  eleventyConfig.addTransform("format", function (content) {
    if (buildMode) {
      // minify for production build
      return minify(content, this.page.outputPath);
    }
    // prettify for develop mode
    return prettify(content, this.page.outputPath);
  });

  // build
  return {
    dir: {
      input: "src/site",
      output: "public",
    },
  };
};
