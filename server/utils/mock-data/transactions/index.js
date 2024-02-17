const { chaseTransactionData } = require('./chase');
const { fidelityTransactionData } = require('./fidelity');
const { plaidTransactionData } = require('./plaid');
const { robinhoodTransactionData } = require('./robinhood');
const { wecuTransactionData } = require('./wecu');

const getTransactionData = name => {
  let data = [];
  switch (name.toLowerCase()) {
    case 'chase':
      data = chaseTransactionData();
      break;
    case 'fidelity':
      data = fidelityTransactionData();
      break;
    case 'plaid':
      data = plaidTransactionData();
      break;
    case 'robinhood':
      data = robinhoodTransactionData();
      break;
    case 'wecu':
      data = wecuTransactionData();
      break;
  }
  const date = new Date();
  // filtering out transactions with future dates
  return data.filter(transaction => {
    return new Date(transaction.date) <= date;
  });
};

module.exports = {
  getTransactionData
};
