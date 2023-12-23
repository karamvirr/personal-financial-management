import Header from '../../components/Header';
import { Chart } from 'react-google-charts';
import Card from '../../components/UI/Card';

const { useState, useEffect } = require('react');
const { TRANSACTIONS_FULL: transactions } = require('../../lib/dummy-data');

const options = {
  pieHole: 0.4,
  is3D: false
};

const Transactions = () => {
  const [transactionData, setTransactionData] = useState(null);
  const [pieChartData, setPieChartData] = useState(null);

  useEffect(() => {
    const data = {};
    transactions.forEach(transaction => {
      const category = transaction.personal_finance_category.primary;
      if (!data[category]) {
        data[category] = 0;
      }
      // NOTE: this is for debugging purposes,
      // negative values are when money moves in an account
      //    - credit card payments, direct deposits, refunds
      // positive values are when moves moves out of an account
      //    - debit card purchases
      if (transaction.amount > 0) {
        data[category] += transaction.amount;
      }
    });
    console.log('data', [['Category', 'Amount'], ...Object.entries(data)]);
    setPieChartData([['Category', 'Amount'], ...Object.entries(data)]);
  }, []);

  const tdClassList = 'border-b border-gray-200 py-1';

  const totalSpend = pieChartData
    ? pieChartData.reduce((accumulator, currentValue) => {
        if (+currentValue[1]) {
          return +currentValue[1] + accumulator;
        }
        return 0;
      }, 0)
    : 0;

  return (
    <>
      <Header>
        <h1 className='text-lg font-bold'>Transactions</h1>
      </Header>
      <section className='mx-auto w-11/12'>
        {transactions && (
          <div className='mt-5'>
            <p className='text-gray-500'>Total Amount</p>
            <p className='text-2xl font-bold'>${totalSpend.toFixed(2)}</p>
          </div>
        )}

        <div className='my-5 flex gap-4'>
          <select
            id='year'
            class='rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'>
            <option selected>Year</option>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
          </select>
          <select
            id='countries'
            class='rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'>
            <option selected>Month</option>
            <option value='January'>January</option>
            <option value='...'>....</option>
            <option value='December'>December</option>
          </select>
        </div>

        <div className='mt-5 flex justify-between'>
          <Card className='w-[calc(50%-0.625rem)]'>
            {pieChartData && (
              <Chart
                chartType='PieChart'
                width='100%'
                height='500px'
                data={pieChartData}
                options={options}
              />
            )}
          </Card>
          <Card className='w-[calc(50%-0.625rem)]'>
            {/* TODO: add a bar chart */}
          </Card>
        </div>
        <Card className='my-5 py-8'>
          <table className='mx-auto w-11/12'>
            <thead className='text-left'>
              <tr>
                <th>Date</th>
                <th></th>
                <th>Name</th>
                <th>Category</th>
                <th className='text-right'>Amount</th>
              </tr>
            </thead>
            <tbody className='text-sm'>
              {transactions.map(transaction => (
                <tr key={transaction.transaction_id}>
                  <td className={tdClassList}>{transaction.date}</td>
                  <td className={tdClassList}>
                    {transaction.logo_url ? (
                      <img
                        className='h-10 w-10 object-contain'
                        src={transaction.logo_url}
                      />
                    ) : (
                      <div className='h-10 w-10'></div>
                    )}
                  </td>
                  <td className={tdClassList}>{transaction.name}</td>
                  <td className={tdClassList}>
                    {transaction.personal_finance_category.primary}
                  </td>
                  <td className={`text-right ${tdClassList}`}>
                    {transaction.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {transactions && (
            <p className='ml-10 mt-5 text-xs text-gray-600'>
              {transactions.length} transaction items
            </p>
          )}
        </Card>
      </section>
    </>
  );
};

export default Transactions;
