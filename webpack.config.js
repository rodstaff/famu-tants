var webpack = require('webpack');
var path = require('path');

module.exports = {
  //entry: './dev/js', 
  entry: './routes', 
  output: {
    path: '../famu-tants-heroku/',
    filename: 'bundle.js'  
  },
  devServer: {
    inline: true,   
    publicPath: '/',    
    port: 8088
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { exclude: /node_modules/,
        test: /\.js$/,
        loader:  'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'react-html-attrs', 
            'transform-class-properties', 
            'transform-decorators-legacy',
            'transform-object-rest-spread'
          ]
        }
      },
      { test: /\.(png|jpg|jpeg|gif|woff)$/, 
        loader: 'url-loader?limit=300000' 
      }
      // {
      //  test: /\.scss/,
      //  loader: 'style-loader!css-loader!sass-loader'
      // }
    ]
  },
  plugins: [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin()
  //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
}