var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'framelessframe.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  watch: true
};
