const {
  getRandomId,
  getRandomNumber,
  mockAccountBalance
} = require('../../helpers');

const wecuAccountBalanceData = () => {
  // Spend Free Checking
  const checkingCurrent = getRandomNumber(500, 1500);
  // Regular Savings
  const savingCurrent = getRandomNumber(20000, 30000);
  // 12 Month Certificate
  const certificateCurrent = getRandomNumber(50000, 60000);

  return [
    {
      balances: {
        available: checkingCurrent,
        current: checkingCurrent
      },
      name: 'Regular Checking',
      official_name: 'Spend Free Checking',
      subtype: 'checking',
      type: 'depository'
    },
    {
      balances: {
        available: certificateCurrent,
        current: certificateCurrent
      },
      name: '12 Month CD',
      official_name: '12 Month Certificate',
      subtype: 'cd',
      type: 'depository'
    }
  ].map(mockAccountBalance);
};

module.exports = {
  wecuAccountBalanceData
};
