const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: "development",
  // The entry point for the bundle
  entry: [
    path.join(__dirname, './src/index'),
  ],

  // Options affecting the output
  output: {
    // The output directory
    path: path.join(__dirname, './build'),
    // The filename of the entry chunk as relative path inside the
    // output.path directory
    filename: 'plusc.js',
  },

  //loaders here
  module: {
     rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, './src/index.html'),
        to: path.join(__dirname, './build'),
        toType: 'dir'
      }
    ])
  ]
}