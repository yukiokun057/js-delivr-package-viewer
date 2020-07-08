const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const apiProxy = createProxyMiddleware({
    target: 'https://registry.npmjs.org',
    logLevel: 'debug',
    changeOrigin: true,
    proxyTimeout: 1000 * 60, // 60 seconds
    // subscribe to http-proxy's proxyRes event
    onProxyRes(proxyRes) {
        proxyRes.headers['access-control-allow-origin'] = 'http://localhost:7071';
        proxyRes.headers['access-control-allow-methods'] = 'DELETE,GET,OPTIONS,POST,PUT,PATCH';
    },
});
app.use(apiProxy);

app.use(cors({
    origin: 'http://localhost:7071',
    credentials: true,
}));

app.listen(9000);
