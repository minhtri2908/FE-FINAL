const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://backend-web-app-1.herokuapp.com',
      changeOrigin: true,
    })
  );
};
