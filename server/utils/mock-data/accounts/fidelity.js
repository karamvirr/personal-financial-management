const { getRandomNumber, mockAccountBalance } = require('../../helpers');

const fidelityAccountBalanceData = () => {
  return [
    {
      balances: {
        current: getRandomNumber(50000, 100000)
      },
      name: 'Fidelity 401k Retirement Account',
      official_name: 'Fidelity 401k Retirement Plan',
      subtype: '401k',
      type: 'investment'
    },
    {
      balances: {
        current: getRandomNumber(10000, 50000)
      },
      name: 'Roth IRA',
      official_name: 'Fidelity Roth Individual Retirement Account',
      subtype: 'roth',
      type: 'investment'
    }
  ].map(mockAccountBalance);
};

module.exports = {
  fidelityAccountBalanceData
};
