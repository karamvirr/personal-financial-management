import useAxios from '../hooks/use-axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/UI/Header';
import NetworkErrorMessage from '../components/NetworkErrorMessage';
import NoDataAvailableMessage from '../components/NoDataAvailableMessage';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import NetWorthSummary from '../components/NetWorthSummary';
import BalanceSummary from '../components/BalanceSummary';
import MonthlySpendingLineChart from '../components/data-visualisations/MonthlySpendingLineChart';

const {
  getTransactionName,
  formatCurrency,
  humanize,
  isObjectEmpty,
  getRandomId
} = require('../utils/helpers');

const Overview = () => {
  // format: { type: { total: 0, data: [] }}
  const [balanceData, setBalanceData] = useState(null);
  // format: { 'YYYY-MM': [] }
  const [transactionData, setTransactionData] = useState(null);
  const { error, sendRequest } = useAxios('/links', 'get');

  useEffect(() => {
    sendRequest(response => {
      const data = response.data;

      // balances categorized by type (deposit, loan, credit, etc.)
      // ex. { depository: { total: 0, data: [] }, credit: { total: 0, data: [] }}
      const parsedBalanceData = {};
      // transactions categorized by month & year ('YYYY-MM')
      const parsedTransactionData = {};

      data.forEach(link => {
        link.balance.accounts.forEach(account => {
          const type = account.type;
          const value = account.balances.current;

          if (!parsedBalanceData[type]) {
            parsedBalanceData[type] = { total: 0, data: [] };
          }
          parsedBalanceData[type].data.push(account);
          parsedBalanceData[type].total += value;
        });

        link.transactions.data.forEach(transaction => {
          // format: 'YYYY-MM'
          const yearMonth = transaction.date.split('-').slice(0, 2).join('-');
          if (!parsedTransactionData[yearMonth]) {
            parsedTransactionData[yearMonth] = [];
          }
          parsedTransactionData[yearMonth].push(transaction);
        });
      });

      setBalanceData(parsedBalanceData);
      setTransactionData(parsedTransactionData);
    });
  }, []);

  let recentTransactionData = null;
  if (transactionData && !isObjectEmpty(transactionData)) {
    const mostRecentMonth = Object.keys(transactionData).sort().pop();
    recentTransactionData = transactionData[mostRecentMonth]
      .filter(t => t.amount > 0 && !t.pending)
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      })
      .slice(0, 6);
  }

  return (
    <>
      <Header title='Overview' />
      <Section>
        {error && error.message === 'Network Error' && <NetworkErrorMessage />}
        {!error &&
        isObjectEmpty(balanceData) &&
        isObjectEmpty(transactionData) ? (
          <NoDataAvailableMessage />
        ) : (
          <>
            {balanceData && <NetWorthSummary data={balanceData} />}
            <div className='mb-5 flex justify-between'>
              {transactionData && (
                <Card className={`w-[calc(50%-0.625rem)]`}>
                  <div className='px-5 pt-5'>
                    <p className='text-sm font-semibold text-gray-500'>
                      Spending
                    </p>
                  </div>
                  <MonthlySpendingLineChart data={transactionData} />
                </Card>
              )}
              {recentTransactionData && (
                <Card className={`w-[calc(50%-0.625rem)]`}>
                  <div className='px-5 pt-5'>
                    <p className='text-sm font-semibold text-gray-500'>
                      Transactions
                    </p>
                    <p className='text-xl font-bold'>Most Recent</p>
                  </div>
                  <div className='my-5'>
                    {recentTransactionData.map(transaction => (
                      <div
                        className='border-t px-5 py-2.5 last:border-b'
                        key={getRandomId()}>
                        <div className='grid grid-cols-3 text-sm text-gray-600'>
                          <p>{getTransactionName(transaction)}</p>
                          <p>
                            {humanize(
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
                  <Link to='/transactions'>
                    <p
                      className='mb-2.5 cursor-pointer pl-5
                    text-sm font-semibold text-blue-600 hover:text-blue-800'>
                      View all transactions
                    </p>
                  </Link>
                </Card>
              )}
            </div>
            {balanceData &&
              Object.entries(balanceData).map(
                ([type, accounts], index) =>
                  accounts.data && (
                    <BalanceSummary
                      key={`${type}-${index}`}
                      type={type}
                      accounts={accounts}
                    />
                  )
              )}
          </>
        )}
      </Section>
    </>
  );
};

export default Overview;
