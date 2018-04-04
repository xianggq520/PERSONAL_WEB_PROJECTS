'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseURL: '"http://admin.test.moxueyuan.net/"',
  version: '"1.0.0"'
})
