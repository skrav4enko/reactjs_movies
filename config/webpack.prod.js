const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack.common');

const mode = 'production';

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
