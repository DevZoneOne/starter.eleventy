const path = require('path');

module.exports = {
  plugins: [
    require('postcss-hash')({
      manifest: './src/site/_data/style.json',
    }),
    require('autoprefixer'),
    require('cssnano'),
  ],
};