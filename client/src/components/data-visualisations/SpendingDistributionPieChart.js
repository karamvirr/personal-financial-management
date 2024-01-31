import { Chart } from 'react-google-charts';
import React from 'react';
const { humanize } = require('../../utils/helpers');

// transactionData format: { 'MMMM YYYY': [{transaction}, ...}]}
const SpendingDistributionPieChart = React.memo(
  ({ transactionData, option }) => {
    let transactions = null;
    if (option === 'All') {
      transactions = Object.values(transactionData).flatMap(t => t);
    } else {
      transactions = transactionData[option];
    }

    if (!transactions) {
      return null;
    }

    // format: { category: amount }
    const categorySpendingData = {};
    transactions.forEach(transaction => {
      const amount = transaction.amount;
      const category = humanize(transaction.personal_finance_category.primary);

      if (
        amount > 0 &&
        !category.includes('Transfer Out') &&
        category !== 'Other'
      ) {
        if (!categorySpendingData[category]) {
          categorySpendingData[category] = 0;
        }
        categorySpendingData[category] += amount;
      }
    });

    const data = [['Category', 'Amount']];
    Object.entries(categorySpendingData).forEach(([category, amount]) => {
      data.push([category, amount]);
    });

    return (
      <Chart
        chartType='PieChart'
        data={data}
        options={{
          pieHole: 0.4,
          legend: {
            position: 'bottom'
          }
        }}
        width='100%'
        height='400px'
      />
    );
  },
  (prevProps, nextProps) => {
    return prevProps.option === nextProps.option;
  }
);

export default SpendingDistributionPieChart;
