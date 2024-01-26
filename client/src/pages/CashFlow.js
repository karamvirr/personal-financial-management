import Header from '../components/UI/Header';
import Card from '../components/UI/Card';
import ExpenseSankeyDiagram from '../components/data-visualisations/ExpenseSankeyDiagram';
import IncomeSankeyDiagram from '../components/data-visualisations/IncomeSankeyDiagram';
import DropdownMenu from '../components/DropdownMenu';
import { useState, useEffect } from 'react';
import axios from 'axios';

const {
  getTransactionMonths,
  getColor,
  getTransactionName,
  formatDate,
  formatCurrency,
  formatPercent,
  sanitizeCategory
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
      const name = transaction.name;
      let amount = transaction.amount;

      if (!name.startsWith('Transfer From') && !name.includes('Pending')) {
        if (amount > 0) {
          // expenses
          const category = sanitizeCategory(
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
      <Header>
        <h1 className='text-lg font-bold'>Cash Flow</h1>
      </Header>
      <section className='mx-auto my-5 w-11/12'>
        {transactionData && (
          <>
            <DropdownMenu
              items={getTransactionMonths(transactionData)}
              label='Select a month'
              onSelect={onDropdownSelectHandler}
              className='mb-5'
            />
            <div className='mb-5 grid grid-cols-4 gap-5'>
              {buildCard('Income', income, getColor(income))}
              {buildCard('Expenses', expenses, getColor(-expenses))}
              {buildCard('Total Savings', totalSavings, getColor(totalSavings))}
              {buildCard(
                'Savings Rate',
                savingsRate,
                getColor(savingsRate),
                true
              )}
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
