import Header from '../../components/UI/Header';
import Card from '../../components/UI/Card';
import { Chart } from 'react-google-charts';

import { useState, useEffect } from 'react';
import axios from 'axios';

const {
  formatCurrency,
  formatPercent,
  sanitizeCategory
} = require('../../utils/helpers');

const expenseColors = [
  '#a6cee3',
  '#1f78b4',
  '#b2df8a',
  '#33a02c',
  '#fb9a99',
  '#e31a1c',
  '#fdbf6f',
  '#ff7f00',
  '#cab2d6',
  '#6a3d9a',
  '#ffff99',
  '#b15928'
];

const incomeColors = [
  '#b2df8a',
  '#33a02c',
  '#a6cee3',
  '#1f78b4',
  '#fb9a99',
  '#e31a1c',
  '#fdbf6f',
  '#ff7f00',
  '#cab2d6',
  '#6a3d9a',
  '#ffff99',
  '#b15928'
];

const CashFlow = () => {
  const [transactionData, setTransactionData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8080/links', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        const data = response.data;
        setTransactionData(data.flatMap(link => link.transactions.data));
      });
  }, []);

  let expenseData = null;
  let incomeData = null;
  let expenses = 0;
  let income = 0;
  let totalSavings = 0;
  let savingsRate = 0;
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  if (transactionData) {
    let monthlyData = {};
    transactionData.forEach(transaction => {
      // in 'YYYY-MM' format
      const key = transaction.date.split('-').slice(0, 2).join('-');

      if (!monthlyData[key]) {
        monthlyData[key] = [];
      }
      monthlyData[key].push(transaction);
    });

    let monthInt = date.getMonth() + 1;
    if (monthInt < 10) {
      monthInt = `0${monthInt}`;
    }
    const currentMonthKey = `${year}-${monthInt}`;

    expenseData = [['From', 'To', 'Amount']];
    incomeData = [['From', 'To', 'Amount']];

    monthlyData[currentMonthKey].forEach(transaction => {
      const name = transaction.name;
      let amount = transaction.amount;

      if (!name.startsWith('Transfer From') && !name.includes('Pending')) {
        if (amount > 0) {
          const category = sanitizeCategory(
            transaction.personal_finance_category.primary
          );

          expenses += amount;
          expenseData.push(['Spending', category, amount]);
          expenseData.push([category, name, amount]);
        } else {
          amount = Math.abs(amount);
          income += amount;
          incomeData.push([name, 'Income', amount]);
        }
      }
    });

    totalSavings = income - expenses;
    if (income > 0) {
      savingsRate = totalSavings / income;
    }
  }

  return (
    <>
      <Header>
        <h1 className='text-lg font-bold'>Cash Flow</h1>
      </Header>
      <section className='p-5'>
        <div className='mb-5'>
          <p className='text-2xl font-bold'>
            {month} {year}
          </p>
        </div>
        <div className='mb-5 grid grid-cols-4 gap-5'>
          <Card className='p-5'>
            <p className='font-bold text-gray-500'>Income</p>
            <p className='text-2xl font-bold text-green-600 '>
              {formatCurrency(income)}
            </p>
          </Card>
          <Card className='p-5'>
            <p className='font-bold text-gray-500'>Expenses</p>
            <p className='text-2xl font-bold text-red-600'>
              {formatCurrency(expenses)}
            </p>
          </Card>
          <Card className='p-5'>
            <p className='font-bold text-gray-500'>Total Savings</p>
            <p
              className={`text-2xl font-bold ${
                totalSavings > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
              {formatCurrency(totalSavings)}
            </p>
          </Card>
          <Card className='p-5'>
            <p className='font-bold text-gray-500'>Savings Rate</p>
            <p className='text-2xl font-bold'>{formatPercent(savingsRate)}</p>
          </Card>
        </div>
        {expenseData && expenseData.length > 1 && (
          <Card className='mb-5'>
            <div className='px-5 pt-5'>
              <p className='text-sm font-semibold text-gray-500'>Cash Flow</p>
              <p className='text-xl font-bold'>Expenses</p>
            </div>
            <Chart
              chartType='Sankey'
              width='100%'
              height='500px'
              data={expenseData}
              options={{
                sankey: {
                  node: {
                    label: {
                      fontName: 'Roboto'
                    },
                    colors: expenseColors
                  },
                  link: {
                    colorMode: 'gradient',
                    colors: expenseColors
                  }
                }
              }}
              className='p-5'
            />
          </Card>
        )}
        {incomeData && incomeData.length > 1 && (
          <Card>
            <div className='px-5 pt-5'>
              <p className='text-sm font-semibold text-gray-500'>Cash Flow</p>
              <p className='text-xl font-bold'>Income</p>
            </div>
            <Chart
              chartType='Sankey'
              width='100%'
              height='500px'
              data={incomeData}
              options={{
                sankey: {
                  node: {
                    label: {
                      fontName: 'Roboto'
                    },
                    colors: incomeColors
                  },
                  link: {
                    colorMode: 'gradient',
                    colors: incomeColors
                  }
                }
              }}
              className='p-5'
            />
          </Card>
        )}
      </section>
    </>
  );
};

export default CashFlow;
