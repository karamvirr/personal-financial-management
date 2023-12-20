require('dotenv').config();

const mongoose = require('mongoose');

const express = require('express');
const axios = require('axios');

const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const port = process.env.PORT || 8080;

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

app.use(cors());

mongoose
  .connect(process.env.MONGODB_CLUSTER_URL)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

// TODO: move this to a models directory
const accountSchema = mongoose.Schema({
  // institution name
  name: {
    type: String,
    required: true
  },
  access_token: {
    type: String,
    required: true
  },
  item_id: {
    type: String,
    required: true
  }
});

const Account = mongoose.model('Account', accountSchema);

// TODO: create a separate file for account related actions
app.get('/accounts', (req, res) => {
  Account.find().then(data => {
    res.send(data);
  });
});

app.post('/accounts', (req, res) => {
  const { name, access_token, item_id } = req.body;

  let account = new Account({
    name: name,
    access_token: access_token,
    item_id: item_id
  });

  account
    .save()
    .then(record => {
      res.json({
        id: record._id,
        message: 'Account record has been successfully created!'
      });
    })
    .catch(error => {
      res.json({
        error: error.name,
        message: error.message
      });
    });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// creates and returns a link_token, which is required as a parameter
// when initializing a Link (Plaid term for a front-end component that connects
// a financial institution to Plaid).
// https://plaid.com/docs/api/tokens/#linktokencreate
app.post('/link_token', (req, res) => {
  axios
    .post(
      'https://development.plaid.com/link/token/create',
      {
        client_id: process.env.PLAID_CLIENT_ID,
        secret: process.env.PLAID_SECRET,
        user: {
          // This should correspond to a unique id for the current user.
          // However, this app is only meant to be used by one user, so a
          // static identifier will suffice
          client_user_id: 'app_user',
          phone_number: '+1 415 5550123'
        },
        client_name: 'Personal Financial Management Application',
        country_codes: ['US'],
        language: 'en',
        products: ['transactions']
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

// exchange a Link public_token for an API access_token.
// unlike public_tokens, which expire after 30min, access_tokens
// do not expire, unless they are revoked by calling /item/remove on
// the Plaid API.
// https://plaid.com/docs/api/tokens/#itempublic_tokenexchange
app.post('/access_token', (req, res) => {
  axios
    .post(
      'https://development.plaid.com/item/public_token/exchange',
      {
        client_id: process.env.PLAID_CLIENT_ID,
        secret: process.env.PLAID_SECRET,
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

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
