const { DEMO_MODE } = require('../utils/constants');

// @route POST /plaid/link_token
const linkTokenMiddleware = (_, res, next) => {
  if (DEMO_MODE) {
    res.send({
      link_token: 'link-demo-af1a0311-da53-4636-b754-dd15cc058176',
      expiration: '2030-03-27T12:56:34Z',
      request_id: 'XQVgFigpGHXkb0b'
    });
  } else {
    next();
  }
};

// @route POST /plaid/access_token
const accessTokenMiddleware = (_, res, next) => {
  if (DEMO_MODE) {
    res.send({
      access_token: 'access-demo-de3ce8ef-33f8-452c-a685-8671031fc0f6',
      item_id: 'M5eVJqLnv3tbzdngLDp9FL5OlDNxlNhlE55op',
      request_id: 'Aim3b'
    });
  } else {
    next();
  }
};

module.exports = {
  linkTokenMiddleware,
  accessTokenMiddleware
};
