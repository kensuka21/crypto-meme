var config = require('./webpack.config');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

config.plugins = config.plugins || [];

config.plugins.push(
  new UglifyJsPlugin({
    cache: true,
    parallel: true,
    uglifyOptions: {
      compress: false,
      ecma: 6,
      mangle: true
    },
    sourceMap: true
  })
);

module.exports = config;
