const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Link, validate } = require('../models/link');
const {
  createLinkMiddleware,
  getLinksMiddleware,
  deleteLinkMiddleware,
  updateLinkBalanceMiddleware,
  updateLinkTransactionsMiddleware,
  updateAccountTransactionMiddleeware
} = require('../middleware/links');
const {
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  BASE_URL,
  REQUEST_HEADERS
} = require('../utils/constants');

// @route   GET /links
// @desc    Get all links, sorted by institution name
// @access  Public
router.get('/', getLinksMiddleware, (req, res) => {
  Link.find()
    .sort({ name: 1 })
    .then(data => {
      res.send(data);
    });
});

// @route   POST /links
// @desc    Create a new link
// @access  Public
router.post('/', createLinkMiddleware, (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(422).json({ error: error.details[0].message });
  }
  const { name, access_token, item_id } = req.body;

  let link = new Link({
    name: name,
    access_token: access_token,
    item_id: item_id,
    created_at: new Date(),
    balance: {
      accounts: [],
      updated_at: null
    },
    transactions: {
      data: [],
      updated_at: null,
      cursor: null
    }
  });

  link
    .save()
    .then(record => {
      res.send(record);
    })
    .catch(error => {
      res.send({
        error: error.name,
        message: error.message
      });
    });
});

// @route   PUT /links/:id/balance
// @desc    Update the balance data for a link
// @access  Public
router.put('/:id/balance', updateLinkBalanceMiddleware, (req, res) => {
  const { id } = req.params;

  Link.findById(id)
    .then(link => {
      const { access_token } = link;

      return axios.post(
        `${BASE_URL}/accounts/balance/get`,
        {
          client_id: PLAID_CLIENT_ID,
          secret: PLAID_SECRET,
          access_token: access_token
        },
        {
          headers: REQUEST_HEADERS
        }
      );
    })
    .then(response => {
      const accounts = response.data.accounts;
      return Link.findByIdAndUpdate(
        id,
        {
          balance: {
            accounts: accounts,
            updated_at: new Date()
          }
        },
        { new: true }
      );
    })
    .then(link => {
      res.send(link);
    })
    .catch(error => {
      res.status(error.response.status).send({
        status: error.response.status,
        text: error.response.statusText,
        code: error.response.data.error_code,
        message: error.response.data.error_message,
        documentation_url: error.response.data.documentation_url
      });
    });
});

// @route   PUT /links/:id/transactions
// @desc    Update the transactions data for a link
// @access  Public
router.put(
  '/:id/transactions',
  updateLinkTransactionsMiddleware,
  async (req, res) => {
    const { id } = req.params;

    try {
      const link = await Link.findById(id);
      const access_token = link.access_token;
      const cursor = link.transactions.cursor;
      const response = await axios.post(
        `${BASE_URL}/transactions/sync`,
        {
          client_id: PLAID_CLIENT_ID,
          secret: PLAID_SECRET,
          access_token: access_token,
          cursor: cursor,
          count: 500
        },
        {
          headers: REQUEST_HEADERS
        }
      );
      const syncTransactionsData = response.data;
      const updatedLink = await Link.findByIdAndUpdate(
        id,
        {
          transactions: {
            data: [...link.transactions.data, ...syncTransactionsData.added],
            updated_at: new Date(),
            cursor: syncTransactionsData.next_cursor
          }
        },
        { new: true }
      );
      res.send(updatedLink);
    } catch (error) {
      res.status(error.response.status).send({
        status: error.response.status,
        text: error.response.statusText,
        code: error.response.data.error_code,
        message: error.response.data.error_message,
        documentation_url: error.response.data.documentation_url
      });
    }
  }
);

// @route   PUT /links/:id/transactions/:transaction_id
// @desc    Update a transaction for a link
// @access  Public
router.put(
  '/:id/transactions/:transaction_id',
  updateAccountTransactionMiddleeware,
  (req, res) => {
    const id = req.params.id;

    Link.findById(id)
      .then(link => {
        const note = req.body.note;
        const transaction_id = req.params.transaction_id.toString();

        const transactionIndex = link.transactions.data.findIndex(
          transaction => transaction._id.toString() === transaction_id
        );
        if (transactionIndex === -1) {
          return res.status(404).json({
            error: 'Not found',
            message: 'Transaction not found'
          });
        }
        const transaction = link.transactions.data[transactionIndex];
        transaction.note = note;

        link
          .save()
          .then(() => {
            res.send({
              message: 'Transaction updated',
              transaction: transaction
            });
          })
          .catch(error => {
            res.send({
              error: error.name,
              message: error.message
            });
          });
      })
      .catch(error => {
        res.send({
          error: error.name,
          message: error.message
        });
      });
  }
);

// @route   DELETE /links/:id
// @desc    Delete a link
// @access  Public
router.delete('/:id', deleteLinkMiddleware, (req, res) => {
  const { id } = req.params;

  Link.findByIdAndDelete(id)
    .then(() => {
      res.send({
        id: id,
        message: 'Link deleted'
      });
    })
    .catch(error => {
      res.send({
        error: error.name,
        message: error.message
      });
    });
});

module.exports = router;
