const path = require('path');

module.exports = {
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
