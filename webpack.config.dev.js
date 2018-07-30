var config = require('./webpack.config');
var path = require('path');
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var apiUrl = 'http://localhost:3000';

config.devServer = {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 9000
};

config.plugins = config.plugins || [];

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development'),
      'API_URL': JSON.stringify(apiUrl)
    }
  })
);

config.plugins.push(
  new BundleAnalyzerPlugin()
);

module.exports = config;
