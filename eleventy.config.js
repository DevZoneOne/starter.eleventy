import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import eleventyRssPlugin from "@11ty/eleventy-plugin-rss";
import {
  EleventyRenderPlugin,
  EleventyHtmlBasePlugin,
} from "@11ty/eleventy";
import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";

import filters from "./src/filters.js";
import helpers from "./src/helpers.js";
import shortcodes from "./src/shortcodes.js";
import transforms from "./src/transforms.js";

export default async function (eleventyConfig) {
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
  eleventyConfig.addLiquidFilter("dateToRfc3339", eleventyRssPlugin.dateToRfc3339);
  eleventyConfig.addLiquidFilter("getNewestCollectionItemDate", eleventyRssPlugin.getNewestCollectionItemDate);
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
