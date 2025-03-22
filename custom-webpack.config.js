const webpack = require('webpack');
const path = require('path');

// Custom Webpack Configuration
module.exports = {
  node: {
    __dirname: true
  },
  resolve: {
    alias: {
      'app-root-path': resolve(__dirname, '/app-root-path-shim.js')
    }
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     // Define __dirname for compatibility with CommonJS modules
  //     __dirname: JSON.stringify(path.resolve(__dirname)),
  //   }),
  // ],
};
