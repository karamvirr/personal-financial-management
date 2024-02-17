const {
  mockTransaction,
  getRandomDayOfMonth,
  getLastFourteenMonths,
  getRandomNumber
} = require('../../helpers');

const robinhoodTransactionData = () => {
  const data = [];
  const months = getLastFourteenMonths();

  months.forEach((month, index) => {
    // month format: YYYY-MM
    if (index % 4 === 0) {
      data.push(
        mockTransaction({
          date: `${month}-01`,
          amount: -getRandomNumber(150, 250),
          category: ['Investments', 'Interest Income'],
          name: 'Stock Dividend Payment',
          merchant_name: 'Robinhood',
          transaction_type: 'credit',
          personal_finance_category: {
            confidence_level: 'HIGH',
            detailed: 'INCOME_DIVIDENDS',
            primary: 'INCOME'
          },
          personal_finance_category_icon_url:
            'https://plaid-category-icons.plaid.com/PFC_INCOME.png'
        })
      );
    }
  });

  return data;
};

module.exports = {
  robinhoodTransactionData
};
