const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    base: './src/base.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Link Restaurant',
      template: './src/template.html',
    }),
  ],
  mode: 'development',
  devtool: 'inline-source-map', 
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};