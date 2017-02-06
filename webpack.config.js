var webpack = require("webpack");
var WebpackAutoInject = require('webpack-auto-inject-version');

module.exports = {
    entry: {
        'toe': './index.js',
        'toe.min': './index.js'
    },
    output: {
        path: './bin',
        filename: '[name].js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true
    }),
    new WebpackAutoInject()
  ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
}
