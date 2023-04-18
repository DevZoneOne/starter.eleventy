const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const eleventyRssPlugin = require("@11ty/eleventy-plugin-rss");
const {
  EleventyRenderPlugin,
  EleventyHtmlBasePlugin,
} = require("@11ty/eleventy");
const transforms = require("./src/transforms");
const shortcodes = require("./src/shortcodes");
const filters = require("./src/filters");

module.exports = function (eleventyConfig) {
  let buildMode;
  // config
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
  });
  // events
  eleventyConfig.on("eleventy.before", async ({ runMode }) => {
    buildMode = runMode === "build";
  });
  // filters
  eleventyConfig.addFilter("htmlDateString", filters.htmlDateString);
  eleventyConfig.addFilter("readableDate", filters.readableDate);
  eleventyConfig.addFilter("head", filters.head);
  eleventyConfig.addFilter("min", filters.min);
  eleventyConfig.addFilter("md", filters.md);
  eleventyConfig.addFilter("filterTagList", filters.filterTagList);
  // plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyRssPlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  // static
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  // shortcodes
  eleventyConfig.addShortcode("year", shortcodes.year);
  // transform
  eleventyConfig.addTransform("format", function (content) {
    if (buildMode) {
      // minify for production build
      return transforms.minify(content, this.page.outputPath);
    }
    // prettify for develop mode
    return transforms.prettify(content, this.page.outputPath);
  });

  // build
  return {
    dir: {
      input: "src/site",
      output: "public",
    },
  };
};
