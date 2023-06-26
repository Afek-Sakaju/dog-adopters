const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3030,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            babelrcRoots: ['../*'],
          },
        },
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dog-Adopters',
      filename: 'index.html',
      template: 'src/template.html',
      favicon: 'public/dog_feet_logo.png',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public' }],
    }),
    new Dotenv({ expand: true }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@src': path.join(__dirname, 'src/'),
      '@components': path.join(__dirname, 'src/components/'),
      '@base-components': path.join(__dirname, 'src/base-components/'),
      '@utils': path.join(__dirname, 'src/utils/'),
      '@screens': path.join(__dirname, 'src/screens/'),
      '@store': path.join(__dirname, 'src/store/'),
      '@validations': path.join(__dirname, 'src/validations/'),
      '@proxy': path.join(__dirname, 'src/proxy/'),
    },
  },
};
