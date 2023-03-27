const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const { EleventyRenderPlugin } = require('@11ty/eleventy');
const { minify } = require('./src/transforms');
const { zonify } = require('./src/filters');
const { logo, year } = require('./src/shortcodes');

module.exports = function (eleventyConfig) {
  // plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  // static
  eleventyConfig.addPassthroughCopy({ static: '/' });
  // shortcodes
  eleventyConfig.addShortcode('year', year);
  // transform
  eleventyConfig.addTransform('minify', function (content) {
    return minify(content, this.page.outputPath);
  });

  // build
  return {
    dir: {
      input: 'src/site',
      output: 'public',
    },
  };
};
