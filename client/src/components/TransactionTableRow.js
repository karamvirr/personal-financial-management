import axios from 'axios';

const {
  formatCurrency,
  sanitizeCategory,
  getTransactionName
} = require('../utils/helpers');
const { useState } = require('react');

const TransactionTableRow = ({ transaction, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [note, setNote] = useState(transaction.note);

  const saveTransactionHandler = () => {
    axios
      .put(
        `http://localhost:8080/links/${transaction.link_id}/transactions/${transaction._id}`,
        {
          note: note
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(() => {
        setIsEditing(false);
      });
  };

  return (
    <tr
      className='cursor-pointer border-b bg-white transition duration-200
        ease-in-out hover:bg-gray-50'
      scope='row'
      key={`${transaction._id}-${index}`}
      onClick={() => setIsEditing(!isEditing)}>
      <td className='whitespace-nowrap px-6 py-4'>{transaction.date}</td>
      <td className='w-8 min-w-fit max-w-max'>
        {transaction.logo_url && (
          <img
            className='mx-auto w-8 object-contain'
            src={transaction.logo_url}
            alt={transaction.name}
          />
        )}
      </td>
      <td className='whitespace-nowrap px-6 py-4'>
        {getTransactionName(transaction)}
      </td>
      <td className='whitespace-nowrap px-6 py-4'>
        {sanitizeCategory(transaction.personal_finance_category.primary)}
      </td>
      <td>
        {isEditing ? (
          <input
            className='w-full rounded-md border border-gray-300 px-2 py-1'
            type='text'
            defaultValue={transaction.note}
            autoFocus
            onChange={event => setNote(event.target.value)}
          />
        ) : (
          note
        )}
      </td>
      <td
        className={`whitespace-nowrap px-6 py-4 text-right ${
          transaction.amount < 0 ? 'text-emerald-500' : 'text-rose-500'
        }`}>
        {formatCurrency(Math.abs(transaction.amount))}
      </td>
      {isEditing && (
        <td className='text-center'>
          <button
            className='mr-1.5 rounded-md bg-emerald-500 px-4 py-2
            text-xs text-white'
            onClick={event => {
              event.stopPropagation();
              saveTransactionHandler();
            }}>
            Save
          </button>
          <button
            className='rounded-md bg-rose-500 px-4 py-2 text-xs text-white'
            onClick={event => {
              event.stopPropagation();
              setNote(transaction.note);
              setIsEditing(false);
            }}>
            Cancel
          </button>
        </td>
      )}
    </tr>
  );
};

export default TransactionTableRow;
