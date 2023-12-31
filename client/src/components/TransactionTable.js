import Card from './UI/Card';
import TransactionTableRow from './TransactionTableRow';

const { pluralize } = require('../utils/helpers');

const TransactionTable = ({ data }) => {
  return (
    <Card>
      <table className='min-w-full text-left text-sm text-gray-500'>
        <thead className='border-b bg-gray-50 text-xs text-gray-700'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Date
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
            data.map(transaction => (
              <TransactionTableRow transaction={transaction} />
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
