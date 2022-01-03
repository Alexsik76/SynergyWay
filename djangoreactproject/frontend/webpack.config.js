const path = require('path');
const host = process.env.HOST || 'localhost';
process.env.NODE_ENV = 'development';
module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  module: {
    rules: [
      {
        test:  /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',

  },
  devServer: {
    static: path.resolve(__dirname, './public'),

    compress: true,

    hot: true,

    host,

    port: 3000,

      },
};
