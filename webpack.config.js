const baseConfig = require('./webpack.config.base.js')
const webpackMerge = require('webpack-merge')

function buildConfig(env) {
  const config = `./webpack.config.${env}.js`
  return webpackMerge.smart(baseConfig(env), require(config)({ env }))
}

module.exports = buildConfig
