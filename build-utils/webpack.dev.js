const commonPaths = require('./common-paths');
const webpack = require('webpack');

const port = process.env.PORT || 3000;

const config = {
  mode: 'development',

  entry: {
    // ph
  },

  output: {
    filename: '[name].[hash].js'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [

  ],

  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    hot: true,
    open: true
  }

};
module.exports = config;