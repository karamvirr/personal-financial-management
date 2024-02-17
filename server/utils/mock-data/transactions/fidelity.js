const {
  getRandomNumber,
  getLastFourteenMonths,
  mockTransaction
} = require('../../helpers');

const fidelityTransactionData = () => {
  const data = [];
  const months = getLastFourteenMonths();
  const baseValue = getRandomNumber(100, 150);

  months.forEach((month, index) => {
    // month format: YYYY-MM
    data.push(
      mockTransaction({
        date: `${month}-01`,
        amount: -(baseValue - index * 5),
        category: ['Investments', 'Interest Income'],
        name: 'Money Market Fund Dividend',
        merchant_name: 'Fidelity',
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
  });

  return data;
};

module.exports = {
  fidelityTransactionData
};
