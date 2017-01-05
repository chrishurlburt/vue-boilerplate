/* eslint-disable */
var webpack = require('webpack')
var merge = require('webpack-merge')
var validate = require('webpack-validator')
var Joi = require('webpack-validator').Joi
var base = require('./webpack.base.config.js')
var dev = require('./webpack.dev.config.js')
var webpackDevServer = require('webpack-dev-server')

const PORT = process.argv[2] || 8080

// allows the 'vue', and 'babel' keys in webpack-validator
var extension = Joi.object({
  vue: Joi.any(),
  babel: Joi.any(),
  fastUnsafe: Joi.any()
})

var config = merge(base, dev)
Object.keys(config.entry).forEach(function(key) {
  config.entry[key].unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server")
})
var compiler = webpack(validate(config, {
  schemaExtension: extension
}))

var server = new webpackDevServer(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  quiet: true
})

server.listen(PORT, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log(`Dev server listening on port ${PORT}...`)
  }
})
