import { useState } from 'react';
import TransactionEdit from './TransactionEdit';

const {
  formatCurrency,
  sanitizeCategory,
  getTransactionName
} = require('../utils/helpers');

const TransactionShow = ({ transaction, index }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const onDismissHandler = () => {
    setShowEditModal(prevState => !prevState);
  };

  const onUpdateHandler = note => {
    transaction.note = note;
  };

  const padding = 'px-6 py-4';

  return (
    <>
      <tr
        className='min-w-full cursor-pointer border-b bg-white transition duration-200
        ease-in-out hover:bg-gray-50'
        scope='row'
        key={`${transaction._id}-${index}`}
        onClick={onDismissHandler}>
        <td className={`whitespace-nowrap ${padding}`}>{transaction.date}</td>
        <td className={`min-w-8 max-w-8 w-8`}>
          {transaction.logo_url && (
            <img
              className='mx-auto w-8 object-contain'
              src={transaction.logo_url}
              alt={transaction.name}
            />
          )}
        </td>
        <td className={`whitespace-normal ${padding}`}>
          {getTransactionName(transaction)}
        </td>
        <td className={`whitespace-nowrap ${padding}`}>
          <div className='flex flex-row items-center justify-start gap-2.5'>
            {transaction.personal_finance_category_icon_url && (
              <img
                className='w-8 object-contain'
                src={transaction.personal_finance_category_icon_url}
                alt={transaction.personal_finance_category.primary}
              />
            )}
            {sanitizeCategory(transaction.personal_finance_category.primary)}
          </div>
        </td>
        <td
          className={`whitespace-normal break-all ${padding} max-w-1/3 min-w-1/3 w-1/3`}>
          {transaction.note}
        </td>

        <td
          className={`whitespace-nowrap ${padding} text-right ${
            transaction.amount < 0 ? 'text-emerald-500' : 'text-rose-500'
          }`}>
          {formatCurrency(Math.abs(transaction.amount))}
        </td>
      </tr>
      {showEditModal && (
        <TransactionEdit
          transaction={transaction}
          onDismiss={onDismissHandler}
          onUpdate={onUpdateHandler}
        />
      )}
    </>
  );
};

export default TransactionShow;
