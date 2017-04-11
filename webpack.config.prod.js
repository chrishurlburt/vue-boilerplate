const path = require('path')
const webpack = require('webpack')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function (env) {
  return {
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: '[chunkhash].[name].min.js',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  minimize: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins() {
                    return [
                      require('autoprefixer')
                    ]
                  },
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                },
              },
            ],
          }),
        },
      ]
    },
    devtool: 'source-map',
    plugins: [
      new ExtractTextPlugin('[contenthash].styles.css'),
      new OptimizeCSSPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      })
    ],
  }
}
