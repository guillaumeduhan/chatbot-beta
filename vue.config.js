const ExtractTextPlugin = require('mini-css-extract-plugin')

module.exports = {
  devServer: {
    port: '8080',
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')

    config.output
    .filename('[name].js')

    config.plugin('extract-css')
    .use(ExtractTextPlugin, [{
      filename: '[name].css',
      allChunks: true,
    }])
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/style.scss";
        `,
      },
    },
  },
}
