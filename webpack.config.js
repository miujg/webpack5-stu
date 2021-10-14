const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    unknownContextCritical: false,
    rules: [
      {
        test: /\.md$$/,
        use: [
          'vue-loader',
          {
            loader: path.resolve(__dirname, './md-loader/index.js'),
          }
          
        ]
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
        ]
      },
    ]
  },
  resolve: {
    fallback: {
      "path": false,
      "stream": false
    }
  },
  devServer: {
    hot: true,
    port: 8086,
    compress: true,
  }
}