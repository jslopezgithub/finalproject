<<<<<<< HEAD
/* eslint-disable max-len */
=======
>>>>>>> 56460ff1e356afcd24588b010556d4bb55a429a8
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const apiRouter = require('./api');

const apiRoot = '/api';
const app = express();
<<<<<<< HEAD

const staticDir = path.join(__dirname, 'client/build');
=======
const staticDir = path.join(__dirname, 'static');
>>>>>>> 56460ff1e356afcd24588b010556d4bb55a429a8

// General configuration
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

// require HTTPS in production
if (app.get('env') === 'production') {
  app.enable('trust proxy');
  // eslint-disable-next-line consistent-return
  app.use((req, res, next) => {
    if (!req.secure) {
      return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
    }
    next();
  });
}

// Load API router
app.use(apiRoot, apiRouter);

// Serve the bundled client from the server
app.use(express.static(staticDir));
// eslint-disable-next-line consistent-return
app.get('*', (req, res, next) => {
  if (req.url.startsWith(apiRoot)) {
    return next();
  }
<<<<<<< HEAD
  const staticPath = path.join(staticDir, 'index.html');
  console.log('staticPath', staticPath, staticDir);
  res.sendFile(staticPath);
=======
  res.sendFile(path.join(staticDir, 'index.html'));
>>>>>>> 56460ff1e356afcd24588b010556d4bb55a429a8
});

module.exports = app;
