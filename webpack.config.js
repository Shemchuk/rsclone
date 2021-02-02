const path = require('path');
// const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const isDev = process.env.NODE_ENV === 'development';
// const isProd = !isDev;
/*
const optimization = () => {
  const config = {
      splitChunks: {
      chunks: 'all',
    }
  }
  return config;
}
*/

module.exports = (env, options) => {
  const isProd = options.mode === 'production';

  const config = {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? false : 'source-map',
    watch: !isProd,
    watchOptions: {
      aggregateTimeout: 3000,
    },
    entry: ['@babel/polyfill', './src/index.js', './src/assets/sass/style.scss'],
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'script.js',
    },

    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '',
              },
            },
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          // use: ['file-loader'],
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/images',
                name: '[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/icons',
                name: '[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(ttf|woff|woff2|eot)$/,
          use: ['file-loader'],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HTMLWebpackPlugin({
        template: './src/index.html',
        output: {
          path: path.resolve(__dirname, './dist'),
          filename: 'index.html',
        },
        minify: {
          // collapseWhitespace: isProd
        },
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),

      new ESLintPlugin({
        fix: true,
      }),

      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/assets/sounds/', to: 'assets/sounds/' },
          { from: 'src/assets/favicon/', to: 'assets/favicon/' },
          // { from: 'src/assets/audio/shifting.wav'},
          // { from: 'src/assets/images/svg/favicon.svg' },
          // { from: 'rs_school_js.svg' },
          // { from: 'src/assets/images/', to: 'assets/images/' },
          // { from: 'src/assets/icons/', to: 'assets/icons/' },
          // { from: 'src/assets/fonts/', to: 'assets/fonts/'},
        ],
      }),
    ],
  };

  return config;
};

/*
{
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
  },
  output: {
    filename: '[name].[id].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@moduls': path.resolve(__dirname, 'src/moduls'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  optimization: optimization(),
*/
