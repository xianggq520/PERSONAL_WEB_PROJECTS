'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseURL: '"http://192.168.1.45:8081/"',
  version: '"1.0.0"'
})
