const { chaseAccountBalanceData } = require('./chase');
const { fidelityAccountBalanceData } = require('./fidelity');
const { plaidAccountBalanceData } = require('./plaid');
const { robinhoodAccountBalanceData } = require('./robinhood');
const { wecuAccountBalanceData } = require('./wecu');

const getAccountBalanceData = name => {
  switch (name.toLowerCase()) {
    case 'chase':
      return chaseAccountBalanceData();
    case 'fidelity':
      return fidelityAccountBalanceData();
    case 'plaid':
      return plaidAccountBalanceData();
    case 'robinhood':
      return robinhoodAccountBalanceData();
    case 'wecu':
      return wecuAccountBalanceData();
    default:
      return [];
  }
};

module.exports = {
  getAccountBalanceData
};
