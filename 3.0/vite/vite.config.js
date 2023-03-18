const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~@materialstyle': path.resolve(__dirname, 'node_modules/@materialstyle'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}
