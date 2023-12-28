import Header from '../../components/UI/Header';
import { Chart } from 'react-google-charts';
import Card from '../../components/UI/Card';
import axios from 'axios';

const {
  pluralize,
  formatCurrency,
  sanitizeCategory
} = require('../../utils/helpers');

const { useState, useEffect } = require('react');

const Transactions = () => {
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
        // sorts in descending order by transaction date
        setTransactionData(
          data
            .flatMap(link => link.transactions.data)
            .sort((a, b) => {
              return new Date(b.date).getTime() - new Date(a.date).getTime();
            })
        );
      });
  }, []);

  const pieChartData = [['Category', 'Amount']];
  let barChartData = [['Month', 'Amount', { role: 'annotation' }]];
  const monthlyData = {};
  if (transactionData) {
    transactionData.forEach(transaction => {
      const category = sanitizeCategory(
        transaction.personal_finance_category.primary
      );
      const monthYear = transaction.date.split('-').slice(0, 2).join('-');
      const amount = transaction.amount;
      const index = pieChartData.findIndex(row => row[0] === category);

      if (!monthlyData[monthYear]) {
        monthlyData[monthYear] = {};
        monthlyData[monthYear].expenses = 0;
        monthlyData[monthYear].income = 0;
      }
      // negative values are when money moves in an account
      //    - credit card payments, direct deposits, refunds
      // positive values are when moves moves out of an account
      //    - debit card purchases
      if (amount > 0 && !transaction.name.startsWith('Transfer From')) {
        monthlyData[monthYear].expenses += amount;
        if (index === -1) {
          pieChartData.push([category, amount]);
        } else {
          pieChartData[index][1] += amount;
        }
      } else {
        monthlyData[monthYear].income += -amount;
      }
    });

    Object.entries(monthlyData).forEach(([key, data]) => {
      barChartData.push([key, data.expenses, formatCurrency(data.expenses)]);
    });
    barChartData = barChartData.sort((a, b) => {
      return new Date(a[0]).getTime() - new Date(b[0]).getTime();
    });
  }

  return (
    <>
      <Header>
        <h1 className='text-lg font-bold'>Transactions</h1>
      </Header>
      <section className='mx-auto my-5 w-11/12'>
        <div className='mb-5 flex justify-between'>
          <Card className='w-[calc(50%-0.625rem)] p-5'>
            <Chart
              chartType='PieChart'
              data={pieChartData}
              options={{
                title: 'Expense Distribution',
                pieHole: 0.4,
                is3D: false
              }}
              width={'100%'}
              height={'400px'}
            />
          </Card>
          <Card className='w-[calc(50%-0.625rem)] p-5'>
            <Chart
              chartType='BarChart'
              data={barChartData}
              options={{
                title: 'Monthly Expenses',
                hAxis: {
                  title: 'Amount',
                  minValue: 0
                },
                vAxis: {
                  title: 'Month',
                  minValue: 0
                },
                legend: { position: 'none' },
                annotations: {
                  textStyle: {
                    fontSize: 12,
                    italic: true,
                    color: '#000000'
                  }
                }
              }}
              width={'100%'}
              height={'400px'}
            />
          </Card>
        </div>

        <Card>
          <table className='min-w-full text-left text-sm text-gray-500'>
            <thead className='bg-gray-50 text-xs text-gray-700'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Date
                </th>
                <th scope='col' className='px-6 py-3'>
                  Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Category
                </th>
                <th scope='col' className='px-6 py-3 text-right'>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {transactionData &&
                transactionData.map(transaction => (
                  <tr
                    className='border-b bg-white transition duration-200 ease-in-out hover:bg-gray-50'
                    scope='row'
                    key={transaction.transaction_id}>
                    <td className='whitespace-nowrap px-6 py-4'>
                      {transaction.date}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      {transaction.name}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4'>
                      {sanitizeCategory(
                        transaction.personal_finance_category.primary
                      )}
                    </td>
                    <td className='whitespace-nowrap px-6 py-4 text-right'>
                      {formatCurrency(transaction.amount)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {transactionData && (
            <p className='p-4 text-xs text-gray-500'>
              {transactionData.length} {'transaction '}
              {pluralize('item', transactionData.length)}
            </p>
          )}
        </Card>
      </section>
    </>
  );
};

export default Transactions;
