/* eslint-disable */
var path = require('path')
var webpack = require('webpack')
module.exports = {
  output: {
    path: path.resolve(__dirname, './dist' ),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!autoprefixer!sass',
      },
    ]
  },
  vue: {
    loaders: {
      sass: 'style!css!sass',
      scss: 'style!css!sass',
      autoprefixer: {
        browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3'],
      },
    },
  },
  devtool: '#source-map'
}
