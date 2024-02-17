const {
  mockTransaction,
  getRandomDayOfMonth,
  getLastFourteenMonths,
  getRandomNumber
} = require('../../helpers');

const chaseTransactionData = () => {
  const data = [];
  const months = getLastFourteenMonths();
  months.forEach(month => {
    // month format: YYYY-MM
    const numberOfTransactions = parseInt(getRandomNumber(1, 3));

    for (let i = 0; i < numberOfTransactions; i++) {
      data.push(
        mockTransaction({
          date: `${month}-${getRandomDayOfMonth()}`,
          amount: getRandomNumber(5, 75),
          category: ['Shops', 'Digital Purchase'],
          name: 'Amazon',
          payment_channel: 'online',
          personal_finance_category: {
            confidence_level: 'LOW',
            detailed: 'GENERAL_MERCHANDISE_ONLINE_MARKETPLACES',
            primary: 'GENERAL_MERCHANDISE'
          },
          personal_finance_category_icon_url:
            'https://plaid-category-icons.plaid.com/PFC_GENERAL_MERCHANDISE.png',
          transaction_type: 'digital'
        })
      );
    }
  });

  return data;
};

module.exports = {
  chaseTransactionData
};
