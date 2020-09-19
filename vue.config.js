const path = require('path');

module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias .set("@", path.join(__dirname, "./src"));
    
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/_variables.scss"; @import "@/_layout.scss";`
      }
    }
  },
  pwa: {
    name: 'Pi Academy',
    themeColor: '#376996',
  }
};
