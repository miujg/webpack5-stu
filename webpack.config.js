const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type { import('webpack').Configuration } */
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "./dist")
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.md$$/,
        use: [
          'vue-loader',
          path.resolve(__dirname, './md-loader/index.js')
        ]
      },
      {
        test: /\.vue$$/,
        use: [
          'vue-loader',
          // path.resolve(__dirname, './md-loader/index.js')
        ]
      },
    ]
  },
  devServer: {
    hot: true,
    port: 8086,
    compress: true,
  }
}