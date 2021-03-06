const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: path.join('bundle.js')
  },
  resolve: {
    alias: {
      'react-router-restore-scroll':
        path.join('..', 'modules', 'index')
    }
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: {
      assets: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: true
    }
  }
}
