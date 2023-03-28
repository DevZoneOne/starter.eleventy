const path = require('path');

module.exports = {
  plugins: [
    require('postcss-hash')({
      manifest: './src/site/_data/manifest.json',
    }),
    require('autoprefixer'),
    require('cssnano'),
  ],
};