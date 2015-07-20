var webpackConfig = require('./webpack.config.js');

module.exports = {
  builder: 'zuul-builder-webpack',
  ui: 'mocha-bdd',
  webpack: webpackConfig,
  phantom: true
};
