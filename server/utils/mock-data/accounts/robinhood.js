const { mockAccountBalance, getRandomNumber } = require('../../helpers');

const robinhoodAccountBalanceData = () => {
  const stocks = getRandomNumber(1000, 10000);
  const cash = getRandomNumber(50, 1000);

  return [
    {
      balances: {
        available: cash,
        current: stocks + cash,
        iso_currency_code: 'USD',
        limit: null,
        unofficial_currency_code: null
      },
      name: 'Robinhood Brokerage',
      official_name: 'Robinhood Brokerage',
      subtype: 'brokerage',
      type: 'investment'
    },
    {
      balances: {
        available: cash,
        current: cash
      },
      name: 'Robinhood Cash Management',
      official_name: 'Robinhood Cash Management',
      subtype: 'checking',
      type: 'depository'
    }
  ].map(mockAccountBalance);
};

module.exports = {
  robinhoodAccountBalanceData
};
