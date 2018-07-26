const path = require('path');
const loader = require('./loader');

const adminServerFilePath = path.resolve(__dirname, '../client/bootstrap/server');
const serverBuildPath = path.resolve(__dirname, '../../dist/');

module.exports = {
  mode: process.env.NODE_ENV,
  name: 'server',
  entry: {
    serverEntry: adminServerFilePath,
  },
  output: {
    path: serverBuildPath,
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, '../client'), 'node_modules'],
  },
  module: {
    rules: [
      loader.jsx(),
    ],
  },
};
