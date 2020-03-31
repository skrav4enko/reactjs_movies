const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const postcssNormalize = require('postcss-normalize');

const styleLoaders = (isDevelopment) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDevelopment,
        reloadAll: true,
      },
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: () => [postcssNormalize()],
      },
    },
    {
      loader: 'sass-loader',
    },
  ];

  return loaders;
};

module.exports = (mode) => {
  const isDevelopment = mode === 'development';
  const isProduction = mode === 'production';

  const base = {
    mode,
    context: path.resolve('src'),
    entry: {
      main: './index.js',
    },
    output: {
      path: path.resolve('build'),
      filename: '[name].[hash:8].js',
    },
    resolve: {
      extensions: ['.js', '.json'],
    },
  };

  const plugins = [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProduction,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
    }),
    new CopyWebpackPlugin([
      {
        from: './assets',
        to: 'assets',
      },
    ]),
  ];

  const rules = [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    {
      test: /\.scss$/,
      use: styleLoaders(isDevelopment),
    },
    {
      test: /\.(png|jpe?g|svg|gif)$/,
      use: ['file-loader'],
    },
    {
      test: /\.(ttf|woff|woff2|eot)$/,
      use: ['file-loader'],
    },
  ];

  return {
    base,
    plugins,
    rules,
  };
};
