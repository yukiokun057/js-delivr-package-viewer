const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '/npmjs': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/npmjs': '' },
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set(
      'api',
      path.resolve(__dirname, 'src/api/server'),
    );
    config.resolve.alias.set(
      '@', path.resolve(`${__dirname}/src`),
    );
  },
};
