const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development', 
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            plugins: [
              
              ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
              ['@babel/plugin-transform-class-properties']
            ],
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 
          'css-loader',
          'sass-loader', 
        ],
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/my_project'),
  },
  plugins: [new HtmlWebpackPlugin()],
};
