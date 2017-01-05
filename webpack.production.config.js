/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');
module.exports = {
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[chunkhash].[name].bundle.js'
  },
  plugins: [
    new InlineEnviromentVariablesPlugin({
      NODE_ENV: 'production'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new OptimizeCssAssetsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
         compress: {
           warnings: false,
         },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass', {
          publicPath: '/'
        })
      }
    ]
  },
  vue: {
    loaders: {
      sass: ExtractTextPlugin.extract('style', 'css!sass', {
        publicPath: '/'
      }),
      scss: ExtractTextPlugin.extract('style', 'css!sass', {
        publicPath: '/'
      }),
      autoprefixer: {
        browsers: ['last 2 versions', 'Safari >= 7.1', 'ie >= 9', 'and_chr >= 2.3']
      }
    }
  },
  devtool: 'cheap-module-source-map',
}
