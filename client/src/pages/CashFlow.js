import Header from '../components/UI/Header';
import Card from '../components/UI/Card';
import ExpenseSankeyDiagram from '../components/data-visualisations/ExpenseSankeyDiagram';
import IncomeSankeyDiagram from '../components/data-visualisations/IncomeSankeyDiagram';
import DropdownMenu from '../components/DropdownMenu';
import { useState, useEffect } from 'react';
import useAxios from '../hooks/use-axios';

const {
  getTransactionMonths,
  getColor,
  getTransactionName,
  formatDate,
  formatCurrency,
  formatPercent,
  humanize
} = require('../utils/helpers');

const buildCard = (title, value, color, isPercent) => {
  return (
    <Card className='p-5'>
      <div className='flex flex-col items-center'>
        <p className='text-xs font-bold text-gray-500'>{title}</p>
        <p className={`text-2xl font-bold ${color}`}>
          {isPercent ? formatPercent(value) : formatCurrency(value)}
        </p>
      </div>
    </Card>
  );
};

const CashFlow = () => {
  const [transactionData, setTransactionData] = useState(null);
  const [filteredTransactionData, setFilteredTransactionData] = useState(null);
  const { sendRequest } = useAxios('/links', 'get');

  useEffect(() => {
    sendRequest(response => {
      const data = response.data;
      setTransactionData(data.flatMap(link => link.transactions.data));
    });
  }, []);

  const onDropdownSelectHandler = month => {
    // assert: transactionData !== null
    if (month === 'All') {
      setFilteredTransactionData(transactionData);
    } else {
      const filteredData = transactionData.filter(transaction => {
        const transactionMonth = formatDate(transaction.date);
        return transactionMonth === month;
      });
      setFilteredTransactionData(filteredData);
    }
  };

  let expenses = 0;
  let income = 0;
  let totalSavings = 0;
  let savingsRate = 0;

  let expenseData = null;
  let incomeData = null;
  if (filteredTransactionData) {
    expenseData = [['From', 'To', 'Amount']];
    incomeData = [['From', 'To', 'Amount']];

    filteredTransactionData.forEach(transaction => {
      const name = getTransactionName(transaction);
      let amount = transaction.amount;

      if (!name.startsWith('Transfer From') && !transaction.pending) {
        if (amount > 0) {
          // expenses
          const category = humanize(
            transaction.personal_finance_category.primary
          );
          expenses += amount;

          expenseData.push(['Spending', category, amount]);
          expenseData.push([category, name, amount]);
        } else {
          // income
          amount = Math.abs(amount);
          income += amount;
          incomeData.push([name, 'Income', amount]);
        }
      }
    });

    totalSavings = income - expenses;
    if (totalSavings > 0) {
      savingsRate = totalSavings / income;
    }
  }

  return (
    <>
      <Header title='Cash Flow' />
      <section className='mx-auto my-5 w-11/12'>
        {transactionData && (
          <>
            <DropdownMenu
              items={getTransactionMonths(transactionData)}
              label='Filter by month'
              onSelect={onDropdownSelectHandler}
              className='mb-5'
              excludeAllOption={true}
            />
            <div className='mb-5 grid grid-cols-4 gap-5'>
              {buildCard('Income', income, getColor(income))}
              {buildCard('Expenses', expenses, getColor(-expenses))}
              {buildCard('Total Savings', totalSavings, getColor(totalSavings))}
              {buildCard('Savings Rate', savingsRate, 'text-black', true)}
            </div>
            {expenseData && (
              <Card className='mb-5'>
                <div className='px-5 pt-5'>
                  <p className='text-sm font-semibold text-gray-500'>
                    Cash Flow
                  </p>
                  <p className='text-xl font-bold'>Expenses</p>
                </div>
                <ExpenseSankeyDiagram data={expenseData} />
              </Card>
            )}
            {incomeData && (
              <Card className='mb-5'>
                <div className='px-5 pt-5'>
                  <p className='text-sm font-semibold text-gray-500'>
                    Cash Flow
                  </p>
                  <p className='text-xl font-bold'>Income</p>
                </div>
                <IncomeSankeyDiagram data={incomeData} />
              </Card>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default CashFlow;
