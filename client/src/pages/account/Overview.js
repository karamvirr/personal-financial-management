import { useEffect, useState } from 'react';
import Header from '../../components/UI/Header';
import Card from '../../components/UI/Card';
import ProgressBar from '../../components/UI/ProgressBar';

import { Link } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import { CiCreditCard1 } from 'react-icons/ci';
import { AiOutlineStock } from 'react-icons/ai';
import { IoCashOutline } from 'react-icons/io5';
import { GiPayMoney } from 'react-icons/gi';
import { PiDotsThreeCircleLight } from 'react-icons/pi';

import axios from 'axios';

const {
  titleize,
  pluralize,
  formatCurrency,
  randomId,
  sanitizeCategory
} = require('../../utils/helpers');

const sankeyChartOptions = {};

// For a full list of types, visit
// https://plaid.com/docs/api/accounts/#account-type-schema
//
// @param type        - the type of account
// @return            - the icon component
const getIcon = type => {
  const classList = 'text-2xl text-blue-500';

  switch (type.toLowerCase()) {
    case 'depository':
      return <IoCashOutline className={classList} />;
    case 'credit':
      return <CiCreditCard1 className={classList} />;
    case 'loan':
      return <GiPayMoney className={classList} />;
    case 'investment':
      return <AiOutlineStock className={classList} />;
    case 'other':
      return <PiDotsThreeCircleLight className={classList} />;
    default:
      return null;
  }
};

const Overview = () => {
  const [balanceData, setBalanceData] = useState(null);
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

        // balances categorized by type (debit, loan, credit, etc.)
        // e.x. { depository: [{}, {}, total:], credit: [{}, total:], netWorth:}
        const parsedBalanceData = { netWorth: 0 };
        // transactions categorized by month & year ('YYYY-MM')
        const parsedTransactionData = {};

        data.forEach(link => {
          link.balance.accounts.forEach(account => {
            const type = account.type;

            if (!parsedBalanceData[type]) {
              parsedBalanceData[type] = { total: 0, data: [] };
            }
            parsedBalanceData[type].data.push(account);
            let value = account.balances.current;
            parsedBalanceData[type].total += value;
            if (type != 'depository' && type != 'investment') {
              value = -account.balances.current;
            }
            parsedBalanceData.netWorth += value;
          });
          link.transactions.data.forEach(transaction => {
            const monthYear = transaction.date.split('-').slice(0, 2).join('-');
            if (!parsedTransactionData[monthYear]) {
              parsedTransactionData[monthYear] = [];
            }
            parsedTransactionData[monthYear].push(transaction);
          });
        });

        setBalanceData(parsedBalanceData);
        setTransactionData(parsedTransactionData);
      });
  }, []);

  let assetsValue = null;
  let liabilitiesValue = null;
  if (balanceData && Object.entries(balanceData).length > 1) {
    assetsValue = 0;
    liabilitiesValue = 0;

    assetsValue += balanceData.depository?.total || 0;
    assetsValue += balanceData.investment?.total || 0;

    liabilitiesValue += balanceData.credit?.total || 0;
    liabilitiesValue += balanceData.loan?.total || 0;
  }

  let monthlySpendingData = null;
  if (transactionData && Object.entries(transactionData).length > 0) {
    const year = new Date().getFullYear();
    let currentMonth =
      new Date().getMonth() + 1 > 12 ? 1 : new Date().getMonth() + 1;
    currentMonth = currentMonth < 10 ? '0' + currentMonth : currentMonth;
    let lastMonth = currentMonth - 1 < 1 ? 12 : currentMonth - 1;
    lastMonth = lastMonth < 10 ? '0' + lastMonth : lastMonth;
    const currentDay = new Date().getDate();

    const currentMonthData = transactionData[`${year}-${currentMonth}`];
    if (currentMonthData) {
      currentMonthData.sort((a, b) => a.date.localeCompare(b.date));
      const lastMonthData =
        transactionData[
          `${currentMonth === '01' ? year - 1 : year}-${lastMonth}`
        ];
      lastMonthData.sort((a, b) => a.date.localeCompare(b.date));

      let parseMonthlySpendingData = {};

      for (let i = 1; i <= 31; i++) {
        parseMonthlySpendingData[i] = { lastMonth: null, currentMonth: null };
      }

      let lastMonthSpendingTotal = 0;
      let currentMonthSpendingTotal = 0;

      [
        [lastMonthData, 'lastMonth'],
        [currentMonthData, 'currentMonth']
      ].forEach(([data, month]) => {
        data.forEach(transaction => {
          const day = +transaction.date.split('-')[2];
          if (transaction.amount > 0) {
            if (month === 'lastMonth') {
              lastMonthSpendingTotal += transaction.amount;
              parseMonthlySpendingData[`${day}`][month] =
                lastMonthSpendingTotal;
            } else if (month === 'currentMonth' && day <= currentDay) {
              currentMonthSpendingTotal += transaction.amount;
              parseMonthlySpendingData[`${day}`][month] =
                currentMonthSpendingTotal;
            }
          }
        });
      });

      // fill in null values in parseMonthlySpendingData with previous
      // day's value
      for (let i = 31; i >= 1; i--) {
        if (parseMonthlySpendingData[i].lastMonth === null) {
          parseMonthlySpendingData[i].lastMonth =
            parseMonthlySpendingData[i + 1]?.lastMonth;
        }
        if (parseMonthlySpendingData[i].currentMonth === null) {
          parseMonthlySpendingData[i].currentMonth =
            parseMonthlySpendingData[i + 1]?.currentMonth;
        }
      }

      monthlySpendingData = Object.entries(parseMonthlySpendingData).map(
        ([date, data]) => {
          return [date, data.lastMonth, data.currentMonth];
        }
      );
      monthlySpendingData.unshift(['Day', 'Last Month', 'Current Month']);
    }
  }

  let recentTransactionData = null;
  if (transactionData && Object.entries(transactionData).length > 0) {
    const transactions = Object.values(transactionData)
      .flatMap(transaction => transaction)
      .filter(transaction => transaction.amount > 0);
    const sampleSize = Math.min(transactions.length, 6);
    recentTransactionData = transactions
      .slice(Math.max(transactions.length - sampleSize, 1))
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
  }

  return (
    <>
      <Header>
        <h1 className='text-lg font-bold'>Overview</h1>
      </Header>
      <section className='mx-auto my-5 w-11/12'>
        {balanceData && assetsValue && liabilitiesValue && (
          <Card className='mx-auto mb-5 w-3/4 p-5'>
            <div>
              <p className='font-semibold text-gray-500'>Net Worth</p>
              <p className='text-xl font-bold'>
                {formatCurrency(balanceData.netWorth)}
              </p>
            </div>
            <div className='mt-2.5'>
              <div className='mb-2.5 flex flex-col gap-1.5'>
                <div className='flex flex-row justify-between'>
                  <p className='font-semibold'>Assets:</p>
                  <p>{formatCurrency(assetsValue)}</p>
                </div>
                <ProgressBar
                  value={(assetsValue / Math.abs(balanceData.netWorth)) * 100}
                  color='bg-green-500'
                />
              </div>
              <div className='flex flex-col gap-1.5'>
                <div className='flex flex-row justify-between'>
                  <p className='font-semibold'>Liabilities:</p>
                  <p>{formatCurrency(liabilitiesValue)}</p>
                </div>
                <ProgressBar
                  value={
                    (liabilitiesValue / Math.abs(balanceData.netWorth)) * 100
                  }
                  color='bg-red-500'
                />
              </div>
            </div>
          </Card>
        )}
        <div className='mb-5 flex justify-between'>
          {monthlySpendingData && (
            <Card
              className={`w-[calc(50%-0.625rem)] ${
                recentTransactionData && 'mx-auto'
              }`}>
              <div className='px-5 pt-5'>
                <p className='text-sm font-semibold text-gray-500'>Cash Flow</p>
                <p className='text-xl font-bold'>This month vs. last month</p>
              </div>
              <Chart
                chartType='LineChart'
                width={'100%'}
                height={'400px'}
                data={monthlySpendingData}
                options={{
                  legend: { position: 'bottom' },
                  series: {
                    // previous month spending line
                    0: { color: 'red', lineDashStyle: [4, 4], lineWidth: 1 },
                    // current month spending line
                    1: { color: 'green', lineWidth: 3 }
                  },
                  vAxis: {
                    format: 'currency'
                  }
                }}
              />
            </Card>
          )}
          {recentTransactionData && (
            <Card
              className={`w-[calc(50%-0.625rem)] ${
                !monthlySpendingData && 'mx-auto'
              }`}>
              <div className='px-5 pt-5'>
                <p className='text-sm font-semibold text-gray-500'>
                  Transactions
                </p>
                <p className='text-xl font-bold'>Most Recent</p>
              </div>
              <div>
                <div className='my-5'>
                  {recentTransactionData.map(transaction => (
                    <div className='border-t px-5 py-2.5 last:border-b'>
                      <div className='grid grid-cols-3 text-sm text-gray-600'>
                        <p>
                          {titleize(
                            transaction.merchant_name || transaction.name
                          )}
                        </p>
                        <p>
                          {sanitizeCategory(
                            transaction.personal_finance_category.primary
                          )}
                        </p>
                        <p className='text-right'>
                          {formatCurrency(transaction.amount)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to='/account/transactions'>
                  <p
                    className='mb-2.5 cursor-pointer text-center
                    text-sm text-blue-600 hover:text-blue-800'>
                    View all transactions
                  </p>
                </Link>
              </div>
            </Card>
          )}
        </div>
        {balanceData &&
          Object.entries(balanceData).map(
            ([type, accounts]) =>
              accounts.data && (
                <Card className='mb-5' key={type}>
                  <div
                    className='flex items-center justify-between bg-zinc-100
                    px-5 py-2.5 shadow-sm'>
                    <div className='flex flex-row items-center gap-2.5'>
                      {getIcon(type)}
                      <p className='font-semibold'>{titleize(type)}</p>
                    </div>
                    <p className='font-semibold'>
                      {formatCurrency(accounts.total)}
                    </p>
                  </div>
                  <div className='px-5'>
                    {accounts.data.map(balance => (
                      <div
                        key={randomId()}
                        className='my-2.5 flex items-start justify-between'>
                        <div>
                          <p>{balance.name}</p>
                          <p className='text-xs text-gray-500'>
                            {balance.official_name}
                          </p>
                        </div>
                        <div>
                          <p className='text-right'>
                            {formatCurrency(balance.balances.current)}
                          </p>
                          {balance.balances.available && (
                            <p className='text-right text-xs text-gray-500'>
                              Available:{' '}
                              {formatCurrency(balance.balances.available)}
                            </p>
                          )}
                          {balance.balances.limit && (
                            <p className='text-right text-xs text-gray-500'>
                              Limit: {formatCurrency(balance.balances.limit)}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                    <p className='my-2.5 text-xs text-gray-500'>
                      {accounts.data.length}{' '}
                      {pluralize('account', accounts.data.length)}
                    </p>
                  </div>
                </Card>
              )
          )}
      </section>
    </>
  );
};

export default Overview;
