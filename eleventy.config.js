const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const eleventyRssPlugin = require("@11ty/eleventy-plugin-rss");
const {
  EleventyRenderPlugin,
  EleventyHtmlBasePlugin,
} = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");

const filters = require("./src/filters");
const helpers = require("./src/helpers");
const shortcodes = require("./src/shortcodes");
const transforms = require("./src/transforms");

module.exports = function (eleventyConfig) {
  let prodMode;
  let mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };
  // config
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
  });
  // events
  eleventyConfig.on("eleventy.before", async ({ runMode }) => {
    prodMode = runMode === "build";
  });
  // filters
  eleventyConfig.addFilter("htmlDateString", filters.htmlDateString);
  eleventyConfig.addFilter("readableDate", filters.readableDate);
  eleventyConfig.addFilter("head", filters.head);
  eleventyConfig.addFilter("min", filters.min);
  eleventyConfig.addFilter("md", filters.md);
  eleventyConfig.addFilter("filterTagList", filters.filterTagList);
  // global data
  eleventyConfig.addGlobalData("eleventyComputed.permalink", function () {
    return (data) => helpers.draftPermaLink(data, prodMode);
  });
  eleventyConfig.addGlobalData(
    "eleventyComputed.eleventyExcludeFromCollections",
    function () {
      return (data) => helpers.draftExcludeFromCollections(data, prodMode);
    }
  );
  // library
  eleventyConfig.setLibrary(
    "md",
    markdownIt(mdOptions).use(markdownItFootnote)
  );
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
    if (prodMode) {
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
