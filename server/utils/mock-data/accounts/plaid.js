const {
  getRandomId,
  getRandomNumber,
  mockAccountBalance
} = require('../../helpers');

const plaidAccountBalanceData = () => {
  // Checking
  const checkingCurrent = getRandomNumber(800, 1000);
  // Credit Card
  const creditCardLimit = getRandomNumber(1000, 2000);
  const creditCardCurrent = getRandomNumber(0, creditCardLimit / 2);
  const creditCardAvailable = creditCardLimit - creditCardCurrent;
  // Savings
  const savingCurrent = getRandomNumber(1000, 5000);

  return [
    {
      balances: {
        available: checkingCurrent * 0.9,
        current: checkingCurrent
      },
      name: 'Plaid Checking',
      official_name: 'Plaid Gold Standard 0% Interest Checking',
      subtype: 'checking',
      type: 'depository'
    },
    {
      balances: {
        available: creditCardAvailable,
        current: creditCardCurrent,
        limit: creditCardLimit
      },
      name: 'Plaid Credit Card',
      official_name: 'Plaid Diamond 12.5% APR Interest Credit Card',
      subtype: 'credit card',
      type: 'credit'
    },
    {
      balances: {
        current: getRandomNumber(10000, 30000)
      },
      name: 'Plaid Student Loan',
      subtype: 'student',
      type: 'loan'
    },
    {
      balances: {
        available: savingCurrent * 0.95,
        current: savingCurrent
      },
      name: 'Plaid Saving',
      official_name: 'Plaid Silver Standard 0.1% Interest Saving',
      subtype: 'savings',
      type: 'depository'
    }
  ].map(mockAccountBalance);
};

module.exports = {
  plaidAccountBalanceData
};
