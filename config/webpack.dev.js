const webpack = require('webpack');
const commonConfig = require('./webpack.common');

const mode = 'development';

module.exports = (options) => {
  return {
    ...commonConfig(mode).base,
    plugins: [
      ...commonConfig(mode).plugins,
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      rules: [...commonConfig(mode).rules],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    devtool: 'source-map',
    devServer: {
      port: 3000,
      hot: true,
    },
  };
};
