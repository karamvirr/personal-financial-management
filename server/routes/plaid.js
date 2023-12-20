const axios = require('axios');
const express = require('express');
const router = express.Router();

const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || 'sandbox';
// PLAID_PRODUCTS is a comma-separated list of products to use when initializing
// Link. Note that this list must contain 'assets' in order for the app to be
// able to create and retrieve asset reports.
const PLAID_PRODUCTS = (process.env.PLAID_PRODUCTS || 'transactions').split(
  ','
);
// PLAID_COUNTRY_CODES is a comma-separated list of countries for which users
// will be able to select institutions from.
const PLAID_COUNTRY_CODES = (process.env.PLAID_COUNTRY_CODES || 'US').split(
  ','
);

const BASE_URL = `https://${PLAID_ENV}.plaid.com`;

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

// @route  POST /plaid/link_token
// @desc   Creates and returns a link_token, which is required as a parameter
//         when initializing a Link (Plaid term for a front-end component that connects
//         a financial institution to Plaid).
//         https://plaid.com/docs/api/tokens/#linktokencreate
// @access Public
router.post('/link_token', (_, res) => {
  axios
    .post(
      `${BASE_URL}/link/token/create`,
      {
        client_id: PLAID_CLIENT_ID,
        secret: PLAID_SECRET,
        user: {
          // This should correspond to a unique id for the current user.
          // However, this app is only meant to be used by one user, so a
          // static identifier will suffice.
          client_user_id: 'user'
        },
        client_name: 'Personal Financial Management Application',
        country_codes: PLAID_COUNTRY_CODES,
        language: 'en',
        products: PLAID_PRODUCTS
      },
      config
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.status(error.response.status).json({
        status: error.response.status,
        code: error.code,
        message: error.message
      });
    });
});

// @route  POST /plaid/access_token
// @desc   Exchange a Link public_token for an API access_token.
//         Unlike public_tokens, which expire after 30min, access_tokens
//         do not expire, unless they are revoked by calling
//          /item/access_token/invaliate on the Plaid API.
//         https://plaid.com/docs/api/tokens/#itempublic_tokenexchange
// @access Public
router.post('/access_token', (req, res) => {
  if (!req.body.public_token) {
    return res.status(400).json({
      status: 400,
      code: 'INVALID_INPUT',
      message: 'Missing public_token'
    });
  }

  axios
    .post(
      `${BASE_URL}/item/public_token/exchange`,
      {
        client_id: PLAID_CLIENT_ID,
        secret: PLAID_SECRET,
        public_token: req.body.public_token
      },
      config
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.status(error.response.status).json({
        status: error.response.status,
        code: error.code,
        message: error.message
      });
    });
});

module.exports = router;
