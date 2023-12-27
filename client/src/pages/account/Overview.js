import { useEffect, useState } from 'react';
import Header from '../../components/UI/Header';
import Card from '../../components/UI/Card';
import { Chart } from 'react-google-charts';
import axios from 'axios';

const {
  titleize,
  pluralize,
  formatCurrency,
  randomId,
  sanitizeCategory
} = require('../../utils/helpers');

const sankeyChartOptions = {};

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
        // e.x. { depository: [{}, {}, total:], credit: [{}, total:], net_worth:}
        const parsedBalanceData = { net_worth: 0 };
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
            parsedBalanceData.net_worth += value;
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

  if (balanceData) {
    assetsValue = 0;
    liabilitiesValue = 0;

    assetsValue += balanceData.depository?.total || 0;
    // assetsValue += balanceData.investment?.total || 0;

    liabilitiesValue += balanceData.credit?.total || 0;
    liabilitiesValue += balanceData.loan?.total || 0;
  }

  let sankeyChartDataExpense = null;
  let sankeyChartDataIncome = null;
  let totalSpentThisYear = 0;
  let totalEarnedThisYear = 0;
  if (transactionData) {
    sankeyChartDataExpense = [['From', 'To', 'Amount']];
    sankeyChartDataIncome = [['From', 'To', 'Amount']];
    const categorySpending = {};
    const currentYear = new Date().getFullYear();
    const keys = Object.keys(transactionData).filter(key =>
      key.startsWith(`${currentYear}`)
    );
    keys.forEach(key => {
      transactionData[key].forEach(transaction => {
        const amount = transaction.amount;
        if (amount > 0) {
          totalSpentThisYear += amount;
          const category = sanitizeCategory(
            transaction.personal_finance_category.primary
          );
          const merchantName = transaction.merchant_name || 'N/A';
          if (category !== 'Transfer Out') {
            sankeyChartDataExpense.push([category, merchantName, amount]);
            if (!categorySpending[category]) {
              categorySpending[category] = 0;
            }
            categorySpending[category] += amount;
          }
        } else {
          totalEarnedThisYear += -amount;
          const category = sanitizeCategory(
            transaction.personal_finance_category.primary
          );
          const name = transaction.name || 'N/A';
          if (category !== 'Transfer In' && category !== 'Travel') {
            sankeyChartDataIncome.push([name, category, -amount]);
          }
        }
      });
    });
    Object.entries(categorySpending).forEach(([category, amount]) => {
      sankeyChartDataExpense.push(['Total', category, amount]);
    });
  }
  return (
    <>
      <Header>
        <h1 className='text-lg font-bold'>Overview</h1>
      </Header>
      <section className='mx-auto my-5 w-11/12'>
        {balanceData && transactionData && (
          <div className='mb-5 flex justify-between'>
            <Card className='w-[calc(50%-0.625rem)] p-5'>
              <div>
                <p className='font-semibold'>Net Worth</p>
                <p className='text-xl font-bold'>
                  {formatCurrency(balanceData.net_worth)}
                </p>
              </div>
              <div className='mt-2.5'>
                <div className='flex justify-between'>
                  <p className='font-semibold'>Assets:</p>
                  <p>{formatCurrency(assetsValue)}</p>
                  <p className='font-semibold'>Liabilities:</p>
                  <p>{formatCurrency(liabilitiesValue)}</p>
                </div>
                {/* TODO: net worth chart */}
              </div>
            </Card>
            <div className='w-[calc(50%-0.625rem)] p-5'>
              {/* TODO: this month vs last month spending chart */}
            </div>
          </div>
        )}
        {balanceData &&
          Object.entries(balanceData).map(
            ([type, accounts]) =>
              accounts.data && (
                <Card className='mb-5 p-5' key={type}>
                  <div>
                    <p className='font-semibold'>{titleize(type)}</p>
                    <p className='text-xl font-bold'>
                      {formatCurrency(accounts.total)}
                    </p>
                  </div>
                  <div className='my-2.5'>
                    {accounts.data.map(balance => (
                      <div
                        key={randomId()}
                        className='my-2.5 flex items-center justify-between'>
                        <div>
                          <p>{balance.name}</p>
                          <p className='text-xs text-gray-500'>
                            {balance.official_name}
                          </p>
                        </div>
                        <p>{formatCurrency(balance.balances.current)}</p>
                      </div>
                    ))}
                  </div>
                  <p className='text-xs text-gray-500'>
                    {accounts.data.length}{' '}
                    {pluralize('account', accounts.data.length)}
                  </p>
                </Card>
              )
          )}

        <div className='mb-5 flex justify-between'>
          {totalEarnedThisYear > 0 && (
            <Card className='w-[calc(50%-0.625rem)] p-5'>
              <div className='mb-2.5'>
                <p className='font-semibold'>
                  {new Date().getFullYear()} Income
                </p>
                <p className='text-xl font-bold'>
                  {formatCurrency(totalEarnedThisYear)}
                </p>
              </div>
              <Chart
                chartType='Sankey'
                width='100%'
                height='500px'
                data={sankeyChartDataIncome}
                options={sankeyChartOptions}
                className=''
              />
            </Card>
          )}
          {sankeyChartDataExpense && totalSpentThisYear > 0 && (
            <Card className='w-[calc(50%-0.625rem)] p-5'>
              <div className='mb-2.5'>
                <p className='font-semibold'>
                  {new Date().getFullYear()} Expenses
                </p>
                <p className='text-xl font-bold'>
                  {formatCurrency(totalSpentThisYear)}
                </p>
              </div>
              <Chart
                chartType='Sankey'
                width='100%'
                height='500px'
                data={sankeyChartDataExpense}
                options={sankeyChartOptions}
              />
            </Card>
          )}
        </div>
      </section>
    </>
  );
};

export default Overview;
