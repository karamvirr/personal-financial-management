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
const REQUEST_HEADERS = {
  'Content-Type': 'application/json'
};

module.exports = {
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PRODUCTS,
  PLAID_COUNTRY_CODES,
  BASE_URL,
  REQUEST_HEADERS
};
