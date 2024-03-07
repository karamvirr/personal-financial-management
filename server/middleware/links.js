const { DEMO_MODE } = require('../utils/constants');
const { getAccountLinks } = require('../utils/mock-data/links');
const { getTransactionData } = require('../utils/mock-data/transactions');
const { getAccountBalanceData } = require('../utils/mock-data/accounts');
const { getRandomId } = require('../utils/helpers');

let accountLinks = getAccountLinks();

// @route GET /links
const getLinksMiddleware = (_, res, next) => {
  if (DEMO_MODE) {
    res.send(accountLinks.sort((a, b) => a.name.localeCompare(b.name)));
  } else {
    next();
  }
};

// @route POST /links
const createLinkMiddleware = (_, res, next) => {
  const name = `Bank #${accountLinks.length + 1}`;
  if (DEMO_MODE) {
    res.send({
      _id: getRandomId(),
      name: name,
      access_token: `access-demo-${getRandomId()}`,
      item_id: getRandomId(),
      created_at: new Date(),
      balance: {
        accounts: [],
        updated_at: new Date()
      },
      transactions: {
        data: [],
        updated_at: new Date(),
        cursor: null
      }
    });
  } else {
    next();
  }
};

// @route DELETE /links/:id
const deleteLinkMiddleware = (req, res, next) => {
  if (DEMO_MODE) {
    const index = accountLinks.findIndex(link => link._id === req.params.id);
    if (index === -1) {
      return res.status(404).json({
        error: 'Not found',
        message: 'Link not found'
      });
    }
    accountLinks.splice(index, 1);
    res.send({
      id: req.params.id,
      message: 'Link deleted'
    });
  } else {
    next();
  }
};

// @route PUT /links/:id/balance
const updateLinkBalanceMiddleware = (req, res, next) => {
  if (DEMO_MODE) {
    const func = () => {
      const index = accountLinks.findIndex(link => link._id === req.params.id);
      if (index === -1) {
        return res.status(404).json({
          error: 'Not found',
          message: 'Link not found'
        });
      }
      const link = accountLinks[index];
      link.balance = {
        accounts: getAccountBalanceData(link.name),
        updated_at: new Date()
      };

      res.send(link);
    };
    if (req.originalUrl.includes('balance')) {
      // I've noticed that the Plaid endpoint for balance data takes a while to
      // responsd, so we'll simulate that here.
      // const delay = getRandomNumber(5, 10) * 1000; TODO - uncomment this line
      const delay = 100; // TODO - remove this line
      setTimeout(func, delay);
    } else {
      func();
    }
  } else {
    next();
  }
};

// @route PUT /links/:id/transactions
const updateLinkTransactionsMiddleware = (req, res, next) => {
  if (DEMO_MODE) {
    const index = accountLinks.findIndex(
      link => link._id.toString() === req.params.id.toString()
    );

    if (index === -1) {
      return res.status(404).json({
        error: 'Not found',
        message: 'Link not found'
      });
    }

    const link = accountLinks[index];
    link.transactions = {
      data: getTransactionData(link.name),
      updated_at: new Date(),
      cursor: getRandomId()
    };

    res.send(link);
  } else {
    next();
  }
};

// @route PUT /links/:id/transactions/:transaction_id
const updateAccountTransactionMiddleeware = (req, res, next) => {
  if (DEMO_MODE) {
    const id = req.params.id.toString();
    const transaction_id = req.params.transaction_id.toString();
    const index = accountLinks.findIndex(link => link._id === id);
    if (index === -1) {
      return res.status(404).json({
        error: 'Not found',
        message: 'Link not found'
      });
    }

    const link = accountLinks[index];
    const transactionIndex = link.transactions.data.findIndex(
      transaction => transaction._id === transaction_id
    );
    if (transactionIndex === -1) {
      return res.status(404).json({
        error: 'Not found',
        message: 'Transaction not found'
      });
    }
    const transaction = link.transactions.data[transactionIndex];
    transaction.note = req.body.note;

    res.send({
      message: 'Transaction updated',
      transaction: transaction
    });
  } else {
    next();
  }
};

module.exports = {
  createLinkMiddleware,
  getLinksMiddleware,
  deleteLinkMiddleware,
  updateLinkBalanceMiddleware,
  updateLinkTransactionsMiddleware,
  updateAccountTransactionMiddleeware
};
