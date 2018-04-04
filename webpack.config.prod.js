var config = require('./webpack.config');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');

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

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
      'API_URL': JSON.stringify('')
    }
  })
);

module.exports = config;
