/* eslint-disable global-require */

/**
 * Front-end middleware
 */
const path = require('path');
module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');
  app.get('/privacy-policy.html', (req, res) =>
    res.sendFile(path.resolve(outputPath, 'privacy-policy.html')),
  );
  app.get('/terms-and-conditions.html', (req, res) =>
    res.sendFile(path.resolve(outputPath, 'terms-and-conditions.html')),
  );
  app.get('/remove-app.html', (req, res) =>
    res.sendFile(path.resolve(outputPath, 'remove-app.html')),
  );
  app.get('/google8fa337112b29e2b7.html', (req, res) =>
    res.sendFile(path.resolve(outputPath, 'google8fa337112b29e2b7.html')),
  );
  app.get('/googlea60f97ac58b65c03.html', (req, res) =>
    res.sendFile(path.resolve(outputPath, 'googlea60f97ac58b65c03.html')),
  );
  if (isProd) {
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../../internals/webpack/webpack.dev.babel');
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
