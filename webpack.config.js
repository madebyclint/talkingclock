var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'scripts/reactbuild');
var APP_DIR = path.resolve(__dirname, 'scripts/reactapp');

var config = {
  entry: APP_DIR + '/reactapp.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'reactbundle.js'
  }
};

module.exports = config;