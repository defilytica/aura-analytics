module.exports = {
  eslint: {
    enable: process.env.NODE_ENV !== 'production' || !process.env.CI,
  },
  webpack: {
    configure: (webpackConfig) => {
      // Add fallbacks for Node.js polyfills that are no longer included in webpack 5
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url"),
        "buffer": require.resolve("buffer"),
        "process": require.resolve("process/browser.js"),
      };

      // Fix for fully specified module resolution
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        'process/browser': require.resolve('process/browser.js'),
      };

      // Ensure plugins array exists
      if (!webpackConfig.plugins) {
        webpackConfig.plugins = [];
      }

      // Add ProvidePlugin for global polyfills
      const webpack = require('webpack');
      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser.js',
          Buffer: ['buffer', 'Buffer'],
        })
      );

      return webpackConfig;
    },
  },
};