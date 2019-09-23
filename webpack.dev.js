const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'webpack-examples', 'basic.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {},
          },
        ],
      },
    ],
  },
}
