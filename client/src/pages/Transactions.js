import useAxios from '../hooks/use-axios';
import NetworkErrorMessage from '../components/NetworkErrorMessage';
import NoDataAvailableMessage from '../components/NoDataAvailableMessage';
import Header from '../components/UI/Header';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import TransactionTable from '../components/TransactionTable';
import DropdownMenu from '../components/DropdownMenu';
import SpendingDistributionPieChart from '../components/data-visualisations/SpendingDistributionPieChart';
import MonthlySpendingBarChart from '../components/data-visualisations/MonthlySpendingBarChart';
const { useState, useEffect } = require('react');
const {
  getTransactionMonths,
  formatDate,
  isObjectEmpty
} = require('../utils/helpers');

const Transactions = () => {
  // format: [{ transaction }, ...}]
  const [transactionData, setTransactionData] = useState(null);
  // format: { 'MMMM YYYY': [{transaction}, ...}]}
  const [transactionDataMap, setTransactionDataMap] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const { error, sendRequest } = useAxios('/links', 'get');

  useEffect(() => {
    sendRequest(response => {
      const parsedTransactionData = response.data
        .flatMap(link => {
          return link.transactions.data.map(transaction => {
            return {
              ...transaction,
              link_id: link._id
            };
          });
        })
        // sorts in descending order by transaction date
        .sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

      const parsedMapData = {};
      parsedTransactionData.forEach(transaction => {
        // format: 'YYYY-MM-DD'
        const date = transaction.date;
        // format: 'YYYY-MM'
        const yearMonth = date.split('-').slice(0, 2).join('-');
        // format: 'MMMM YYYY'
        const key = formatDate(yearMonth);

        if (!parsedMapData[key]) {
          parsedMapData[key] = [];
        }
        parsedMapData[key].push(transaction);
      });

      setTransactionData(parsedTransactionData);
      setTransactionDataMap(parsedMapData);
    });
  }, []);

  const onDropdownSelectHandler = month => {
    setSelectedOption(month);
  };

  const onSearchHandler = query => {
    setSearchQuery(query);
  };

  const onSortHandler = isAscending => {
    const sort = transactions => {
      const copy = [...transactions];
      if (isAscending) {
        return copy.sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
      }
      return copy.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    };
    setTransactionData(prevState => {
      return sort(prevState);
    });
    setTransactionDataMap(prevState => {
      const copy = { ...prevState };
      for (const key in copy) {
        copy[key] = sort(copy[key]);
      }
      return copy;
    });
  };

  let filteredTransactionData = null;
  if (selectedOption && transactionData && !isObjectEmpty(transactionDataMap)) {
    // set table data
    if (selectedOption === 'All') {
      filteredTransactionData = transactionData;
    } else {
      filteredTransactionData = transactionDataMap[selectedOption];
    }

    filteredTransactionData = filteredTransactionData.filter(transaction => {
      const name = transaction.name.toLowerCase().trim();
      const query = searchQuery.toLowerCase().trim();
      return name.includes(query);
    });
  }

  return (
    <>
      <Header title='Transactions' />
      <Section>
        {error && error.message === 'Network Error' && <NetworkErrorMessage />}
        {!error && transactionData && transactionData.length === 0 ? (
          <NoDataAvailableMessage />
        ) : (
          <>
            {transactionData && transactionDataMap && (
              <DropdownMenu
                className='mb-5'
                label='Filter by month'
                items={getTransactionMonths(transactionData)}
                onSelect={onDropdownSelectHandler}
              />
            )}
            {selectedOption && transactionDataMap && (
              <div className='mb-5 flex justify-between'>
                <Card className='w-[calc(50%-0.625rem)] p-5'>
                  <p className='text-sm font-semibold text-gray-500'>
                    Spending Distribution
                  </p>
                  <SpendingDistributionPieChart
                    transactionData={transactionDataMap}
                    option={selectedOption}
                  />
                </Card>
                <Card className='w-[calc(50%-0.625rem)] p-5'>
                  <p className='text-sm font-semibold text-gray-500'>
                    Monthly Total
                  </p>
                  <MonthlySpendingBarChart
                    transactionData={transactionDataMap}
                    option={selectedOption}
                  />
                </Card>
              </div>
            )}
            {filteredTransactionData && (
              <TransactionTable
                data={filteredTransactionData}
                onSort={onSortHandler}
                onSearch={onSearchHandler}
              />
            )}
          </>
        )}
      </Section>
    </>
  );
};

export default Transactions;
