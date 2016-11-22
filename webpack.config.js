var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'scripts/reactbuild');
var APP_DIR = path.resolve(__dirname, 'scripts/reactapp');

var config = {
  entry: APP_DIR + '/reactapp.jsx',
  module: {
    loaders: [
        {
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel'
        }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'reactbundle.js'
  }
};

module.exports = config;