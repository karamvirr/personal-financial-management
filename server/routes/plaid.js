const axios = require('axios');
const express = require('express');
const router = express.Router();
const {
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PRODUCTS,
  PLAID_COUNTRY_CODES,
  BASE_URL,
  REQUEST_HEADERS
} = require('../lib/constants');

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
      {
        headers: REQUEST_HEADERS
      }
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
      {
        headers: REQUEST_HEADERS
      }
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
