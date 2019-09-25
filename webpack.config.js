const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  devtool: 'cheap-eval-source-map',
  mode: 'development',
  entry: ['@babel/polyfill', path.join(__dirname, 'src', 'index.js')],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\jpe?g|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'assets', 'index.html'),
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'src'),
    overlay: true,
    open: false,
    hot: true,
    historyApiFallback: true,
  },
}
