"use strict";

var path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};