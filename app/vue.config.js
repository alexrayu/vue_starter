module.exports = {
  lintOnSave: false,
  configureWebpack: {
    externals: {
      axios: 'axios',
      'vue-router': 'VueRouter',
    }
  }
}
