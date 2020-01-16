const pkg = require('./package.json')

process.env.VUE_APP_VERSION = pkg.version

module.exports = {
    devServer: {
        proxy: {
          'xxx': {
            target: 'http://xx.xx.xx.xx:xxxxx',
            changeOrigin: true,
            ws: true,
            pathRewrite: {}
          }
        }
      }
}