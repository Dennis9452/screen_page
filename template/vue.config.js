const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    watch: true
  },
  devServer: {
    host: '0.0.0.0',
    proxy: {
      '^/edgeReceive99': {
        target: 'http://192.168.22.99',
        changeOrigin: true,
        headers: {
          'origin': 'http://192.168.22.99',
          'Access-Control-Allow-Origin': '*',
          'x-requested-with': 'XMLHttpRequest'
        },
        pathRewrite: {
          '^/edgeReceive[0-9]*': '/edgeReceive'
        }
      },
      '^/edgeReceive100': {
        target: 'http://192.168.22.100',
        changeOrigin: true,
        headers: {
          'origin': 'http://192.168.22.100',
          'Access-Control-Allow-Origin': '*',
          'x-requested-with': 'XMLHttpRequest'
        },
        pathRewrite: {
          '^/edgeReceive[0-9]*': '/edgeReceive'
        }
      },
      '^/office-edge/_search': {
        target: 'http://172.16.51.115:9200',
        changeOrigin: true,
        headers: {
          'origin': 'http://172.16.51.115:9200',
          'Access-Control-Allow-Origin': '*',
          'x-requested-with': 'XMLHttpRequest'
        },
        
      }
    }
  },
  assetsDir: 'public-vue-edge-vv',
})
