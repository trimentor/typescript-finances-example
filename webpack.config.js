const NODE_ENV = process.env.NODE_ENV || 'development';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/main.html',
});
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin();
const path = require('path');

module.exports = {
  devServer: {
    contentBase: './dist',
  },
  devtool: 'inline-source-map',
  entry: {
    main: ['./src/main.ts', './src/main.scss'],
  },
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        ],
      },
      {
        test: /\.(ico|png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '/images/[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [htmlWebpackPlugin, forkTsCheckerWebpackPlugin],
};
