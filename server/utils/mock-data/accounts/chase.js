const { mockAccountBalance, getRandomNumber } = require('../../helpers');

const chaseAccountBalanceData = () => {
  const limit = 15000;
  const current = getRandomNumber(0, limit / 2);
  const available = limit - current;

  return [
    mockAccountBalance({
      balances: {
        available: available,
        current: current,
        limit: limit
      },
      name: 'Prime Visa',
      official_name: 'Amazon Prime Rewards Visa Signature Card',
      subtype: 'credit card',
      type: 'credit'
    })
  ];
};

module.exports = {
  chaseAccountBalanceData
};
