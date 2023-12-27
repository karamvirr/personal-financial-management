const {
  BALANCES,
  BALANCES_SECONDARY,
  TRANSACTIONS,
  TRANSACTIONS_SECONDARY
} = require('../utils/mock-data');
const { DEMO_MODE } = require('../utils/constants');
const { randomString } = require('../utils/helpers');

const accounts = [
  {
    _id: '1',
    name: 'Chase',
    access_token: `access-demo-${randomString()}`,
    item_id: randomString(),
    created_at: new Date(),
    balance: {
      accounts: [],
      updated_at: null
    },
    transactions: {
      data: [],
      updated_at: null
    }
  },
  {
    _id: '2',
    name: 'WECU',
    access_token: `access-demo-${randomString()}`,
    item_id: randomString(),
    created_at: new Date(),
    balance: {
      accounts: [],
      updated_at: null
    },
    transactions: {
      data: [],
      updated_at: null
    }
  }
];

// @route GET /links
const getLinksMiddleware = (_, res, next) => {
  if (DEMO_MODE) {
    res.send(accounts);
  } else {
    next();
  }
};

// @route POST /links
const createLinkMiddleware = (_, res, next) => {
  const name = `Bank #${Math.random().toString(36).slice(2, 7)}`;
  if (DEMO_MODE) {
    res.send({
      _id: accounts.length + 1,
      name: name,
      access_token: `access-demo-${randomString()}`,
      item_id: randomString(),
      created_at: new Date(),
      balance: {
        accounts: [],
        updated_at: new Date()
      },
      transactions: {
        data: [],
        updated_at: new Date()
      }
    });
  } else {
    next();
  }
};

// @route PUT /links/:id/balance
const updateLinkBalanceMiddleware = (req, res, next) => {
  updateLinkMiddleware(req, res, next);
};

// @route PUT /links/:id/transactions
const updateLinkTransactionsMiddleware = (req, res, next) => {
  updateLinkMiddleware(req, res, next);
};

const updateLinkMiddleware = (req, res, next) => {
  const index = accounts.findIndex(link => link._id === req.params.id);
  if (index === -1) {
    return res.status(404).json({
      error: 'Not found',
      message: 'Link not found'
    });
  }
  const link = accounts[index];
  link.transactions = {
    data: Math.random() < 0.5 ? TRANSACTIONS : TRANSACTIONS_SECONDARY,
    updated_at: new Date()
  };
  link.balance = {
    accounts: Math.random() < 0.5 ? BALANCES : BALANCES_SECONDARY,
    updated_at: new Date()
  };

  if (DEMO_MODE) {
    res.send(link);
  } else {
    next();
  }
};

module.exports = {
  createLinkMiddleware,
  getLinksMiddleware,
  updateLinkBalanceMiddleware,
  updateLinkTransactionsMiddleware
};
