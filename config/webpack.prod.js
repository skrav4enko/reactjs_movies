/* eslint-disable import/no-extraneous-dependencies */
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack.common');

const mode = 'production';

// eslint-disable-next-line no-unused-vars
module.exports = (options) => {
  return {
    ...commonConfig(mode).base,
    plugins: [...commonConfig(mode).plugins],
    module: {
      rules: [...commonConfig(mode).rules],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [new OptimizeCssAssetWebpackPlugin(), new TerserWebpackPlugin()],
    },
  };
};
