const path = require('path');

module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set("@", path.join(__dirname, "./src"));
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/_variables.scss"; @import "@/_layout.scss";`
      }
    }
  },
};
