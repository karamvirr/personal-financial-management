import { Chart } from 'react-google-charts';
import React from 'react';
const {
  sanitizeCategory,
  formatCurrency,
  getTransactionCategories
} = require('../../utils/helpers');

const getBarChartData = (transactionData, option) => {
  const transactions = Object.values(transactionData).flatMap(t => t);
  const categoryList = getTransactionCategories(transactions);

  const parsedData = Object.entries(transactionData).reduce(
    (accumulator, entry) => {
      // key format: 'MMMM YYYY', transactions format: [{transaction}]
      const [key, transactions] = entry;

      let result = { ...accumulator };
      const spendingByCategory = {};
      categoryList.forEach(category => {
        spendingByCategory[category] = 0;
      });
      transactions.forEach(transaction => {
        const amount = transaction.amount;
        const category = sanitizeCategory(
          transaction.personal_finance_category.primary
        );
        if (
          amount > 0 &&
          !category.includes('Transfer Out') &&
          category !== 'Other'
        ) {
          spendingByCategory[category] += amount;
        }
      });
      result[key] = Object.entries(spendingByCategory);
      return result;
    },
    {}
  );

  let data = [];
  Object.entries(parsedData).forEach(([key, categorySpending]) => {
    // key format:'MMMM YYYY'
    // categorySpending format: [[CATEGORY, NUMBER], ...]
    const spending = categorySpending.map(([_, amount]) => {
      return amount;
    });
    spending.unshift(key);
    data.push(spending);
  });

  if (option !== 'All') {
    // include data for the previous 3 months, if available.
    const index = data.findIndex(row => row[0] === option);
    data = data.slice(index, index + 3);
  }
  data.unshift(['Month', ...categoryList]);

  if (data.length <= 4) {
    data.forEach((row, index) => {
      if (index === 0) {
        row.push({ role: 'annotation' });
      } else {
        let sum = 0;
        for (let i = 1; i < row.length; i++) {
          sum += row[i];
        }
        row.push(formatCurrency(sum));
      }
    });
  }

  return data;
};

const options = {
  legend: { position: 'bottom' },
  isStacked: true,
  annotations: {
    alwaysOutside: true,
    textStyle: {
      fontSize: 12,
      color: '#555',
      auraColor: 'none',
      bold: true
    },
    boxStyle: {
      stroke: '#ccc',
      strokeWidth: 1,
      gradient: {
        color1: '#f3e5f5',
        color2: '#f3e5f5',
        x1: '0%',
        y1: '0%',
        x2: '100%',
        y2: '100%'
      }
    }
  },
  animation: {
    startup: true,
    easing: 'out',
    duration: 750
  }
};

// transactionData format: { 'MMMM YYYY': [{transaction}, ...}]}
const MonthlySpendingBarChart = React.memo(
  ({ transactionData, option }) => {
    return (
      <Chart
        chartType='BarChart'
        data={getBarChartData(transactionData, option)}
        options={options}
        width='100%'
        height='400px'
      />
    );
  },
  (prevProps, nextProps) => {
    return prevProps.option === nextProps.option;
  }
);

export default MonthlySpendingBarChart;
