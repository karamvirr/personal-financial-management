import Header from '../../components/UI/Header';
import { Chart } from 'react-google-charts';
import Card from '../../components/UI/Card';
import axios from 'axios';
import TransactionTable from '../../components/TransactionTable';

const { sanitizeCategory } = require('../../utils/helpers');
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
  let barChartData = [['Month', 'Amount']];
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
      barChartData.push([key, data.expenses]);
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
          {pieChartData.length > 1 && (
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
          )}
          {barChartData.length > 1 && (
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
                  },
                  colors: ['#f44336']
                }}
                width={'100%'}
                height={'400px'}
              />
            </Card>
          )}
        </div>

        <TransactionTable data={transactionData} />
      </section>
    </>
  );
};

export default Transactions;
