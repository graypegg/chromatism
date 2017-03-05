var path = require('path');

module.exports = {
  entry: './src/start.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chromatism.js',
    library: 'unfuck',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      }
    ]
  }
};
