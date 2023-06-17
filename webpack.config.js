const path = require('path')

module.exports = {
  entry: `./src/script/index.js`,
  module: {
    rules: [
      {
        test: /node_modules\/(.+)\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    }
  }
}
