/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const commonConfig = require('./webpack.common');

const mode = 'development';

// eslint-disable-next-line no-unused-vars
module.exports = (options) => {
  return {
    ...commonConfig(mode).base,
    plugins: [...commonConfig(mode).plugins, new webpack.HotModuleReplacementPlugin()],
    module: {
      rules: [...commonConfig(mode).rules],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    devtool: 'inline-source-map',
    devServer: {
      port: 3000,
      hot: true,
    },
  };
};
