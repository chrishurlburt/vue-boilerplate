const webpack = require('webpack')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const VENDOR_LIBS = ['babel-polyfill']
const FRAMEWORK = ['vue', 'vuex', 'vue-router']

module.exports = function (env) {
  return {
    entry: {
      bundle: ['babel-polyfill', './src/index.js'],
      vendor: VENDOR_LIBS,
      framework: FRAMEWORK,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js',
    },
    resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'assets/scripts')],
      extensions: ['.js', '.vue', '.json']
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              css: 'vue-style-loader!css-loader',
              scss: 'vue-style-loader!css-loader!sass-loader',
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
            },
          }
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ],
    },
    plugins: [
      // new BundleAnalyzerPlugin(),
      new HtmlWebpackPlugin({
        template: 'assets/index.template.ejs',
        inject: true,
        chunksSortMode: 'dependency'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        chunks: ['bundle', 'vendor']
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'framework',
        chunks: ['bundle', 'framework']
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
      })
    ],
  }
}
