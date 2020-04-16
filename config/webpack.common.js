const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const postcssNormalize = require('postcss-normalize');

const fileNameOutput = ({ isDevelopment, ext }) => {
  return isDevelopment ? `[name].${ext}` : `[name].[hash:8].${ext}`;
};

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
      filename: fileNameOutput({ isDevelopment, ext: 'js' }),
    },
    resolve: {
      extensions: ['.js', '.jsx'],
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
      filename: fileNameOutput({ isDevelopment, ext: 'css' }),
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
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: styleLoaders(isDevelopment),
    },
    {
      test: /\.(png|jpe?g|gif)$/,
      exclude: /node_modules/,
      use: ['file-loader'],
    },
    {
      test: /\.svg$/,
      exclude: /node_modules/,
      use: ['@svgr/webpack'],
    },
    {
      test: /\.(ttf|woff|woff2|eot)$/,
      exclude: /node_modules/,
      use: ['file-loader'],
    },
  ];

  return {
    base,
    plugins,
    rules,
  };
};
