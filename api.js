const { Router } = require('express');

// const { getClient } = require('./db').default;

const api = new Router();

api.get('/', (_, res, next) => {
  // eslint-disable-next-line no-undef
  const client = getClient();

<<<<<<< HEAD
=======
  // eslint-disable-next-line consistent-return
  // eslint-disable-next-line arrow-parens
>>>>>>> 56460ff1e356afcd24588b010556d4bb55a429a8
  client.connect(err => {
    if (err) {
      return next(err);
    }
    res.json({ message: 'Hello, Heroku!' });
    client.close();
  });
});

module.exports = api;
