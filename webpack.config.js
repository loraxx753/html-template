const path = require('path')
require('@babel/polyfill')

module.exports = {
    mode: "development",
    entry: ['@babel/polyfill', "./assets/scripts/main.js" ],
    output: {
        path: path.resolve(__dirname, "assets/scripts/legacy"), 
        filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };
  