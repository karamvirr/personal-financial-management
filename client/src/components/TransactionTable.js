import Card from './UI/Card';
import TransactionTableRow from './TransactionTableRow';
import { useState, useEffect } from 'react';
import useIsFirstRender from '../hooks/use-is-first-render';
import SearchBar from './SearchBar';
import { TiArrowSortedUp } from 'react-icons/ti';
import { TiArrowSortedDown } from 'react-icons/ti';
const { pluralize } = require('../utils/helpers');

const buildSortArrow = isAscending => {
  const icon = isAscending ? <TiArrowSortedUp /> : <TiArrowSortedDown />;

  return <span>{icon}</span>;
};

const TransactionTable = ({ data, onSort, onSearch }) => {
  const isFirstRender = useIsFirstRender();
  const [isAscending, setIsAscending] = useState(false);

  useEffect(() => {
    if (!isFirstRender) {
      onSort(isAscending);
    }
  }, [isAscending]);

  return (
    <Card>
      <div className='min-w-full bg-gray-50 py-1.5 pl-1.5'>
        <SearchBar onSearch={onSearch} />
      </div>

      <table className='min-w-full text-left text-sm text-gray-500'>
        <thead className='border-b bg-gray-50 text-xs text-gray-700'>
          <tr>
            <th
              scope='col'
              className='flex cursor-pointer flex-row items-center gap-1 px-6 py-3'
              onClick={() => {
                setIsAscending(prevState => !prevState);
              }}>
              Date
              {buildSortArrow(isAscending)}
            </th>
            <th scope='col'>{/* MERCHANT LOGO */}</th>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Category
            </th>
            <th scope='col' className='px-6 py-3'>
              Note
            </th>
            <th scope='col' className='px-6 py-3 text-right'>
              Amount
            </th>
            <th scope='col'>{/* SAVE/CANCEL TRANSACTION UPDATE BUTTONS */}</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((transaction, index) => (
              <TransactionTableRow
                transaction={transaction}
                key={transaction._id}
                index={index}
              />
            ))}
        </tbody>
      </table>
      {data && (
        <p className='p-4 text-xs text-gray-500'>
          {data.length} {'transaction '}
          {pluralize('item', data.length)}
        </p>
      )}
    </Card>
  );
};

export default TransactionTable;
