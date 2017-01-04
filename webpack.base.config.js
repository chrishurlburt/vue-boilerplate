/* eslint-disable */
var webpack = require('webpack')
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')
require('babel-polyfill')

module.exports = {
  entry: {
    main: ['babel-polyfill', './src'],
    vendor: ['vue', 'vuex', 'vue-resource', 'vue-router'],
  },
  plugins: [
    new ChunkManifestPlugin({
      filename: 'manifest.json',
      manifestVariable: 'webpackManifest'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    })
  ],
  resolve: {
    // all these extensions will be resolved without specifying extension in the `require` function
    extensions: ['', '.js', '.vue'],
    // files in these directory can be required without a relative path
    modulesDirectories: [
      'node_modules',
      'lib',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file?name=client/[name].[ext]?[hash]"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file?name=client/[name].[ext]?[hash]"
      },
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-loader/,
      },
      {
        test: /\.(jpe?g|png|svg)$/i,
        loaders: [
          'file?name=client/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        // edit this for additional asset file types
        test: /\.(mp4|webm|ogv|gif)$/,
        loaders: [
          'file?name=client/[name].[ext]?[hash]',
        ]
      },

    ]
  },
  babel: {
    presets: ['latest', 'stage-0'],
    plugins: ['transform-runtime'],
  },
}
