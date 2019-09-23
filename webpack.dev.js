const path = require ('path')

module.exports = {
   mode: 'development',
   entry: path.join(__dirname, 'webpack-examples', 'basic.js'),
   output: {
       path: path.join(__dirname, 'build'),
       filename: '[name].[hash].bundle.js'
   }
}