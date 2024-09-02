import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssHash from 'postcss-hash';
import postcssMergeRules from 'postcss-merge-rules';

export default {
  plugins: [
    postcssHash({
      manifest: './src/site/_data/style.json',
    }),
    postcssMergeRules,
    autoprefixer,
    cssnano,
  ],
};