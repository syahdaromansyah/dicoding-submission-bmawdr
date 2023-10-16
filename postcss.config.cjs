/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('postcss-nesting'),
  ],
};

module.exports = config;
