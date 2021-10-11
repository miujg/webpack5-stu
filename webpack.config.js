const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')

/** @type { import('webpack').Configuration } */
module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './main.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "./dist")
  },
  plugins: [
    new VueLoaderPlugin()
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
  }
}