var webpack = require('webpack');
var RewirePlugin = require('rewire-webpack');

module.exports = {
  resolve: {
    extensions: ['', '.coffee', '.cjsx', '.js', '.coffee.cjsx'],
    alias: {
      expect: __dirname + '/test/support/expect.coffee'
    }
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.cjsx$/, loader: "coffee-jsx-loader" }
    ]
  },
  plugins: [
    new RewirePlugin(),
    new webpack.ProvidePlugin({
      expect: "expect"
    })
  ]
};
