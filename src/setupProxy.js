const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
      createProxyMiddleware('/api', {
        target: 'https://services.odata.org/V2/Northwind/Northwind.svc/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {'^/api': ''}
      })
  )
};