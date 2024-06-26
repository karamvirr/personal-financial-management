import useAxios from '../hooks/use-axios';
import Modal from './UI/Modal';
import { useState } from 'react';
import {
  humanize,
  formatTransactionDate,
  formatCurrency
} from '../utils/helpers';
import { MdOutlineCalendarMonth } from 'react-icons/md';

const buildTableRow = (label, value) => {
  return (
    <tr className='text-sm font-medium'>
      <td className='text-gray-500'>{label}</td>
      <td className='pl-2.5'>{value}</td>
    </tr>
  );
};

const TransactionEdit = ({ transaction, onDismiss, onUpdate }) => {
  const [note, setNote] = useState(transaction.note);

  const { sendRequest } = useAxios(
    `/links/${transaction.link_id}/transactions/${transaction._id}`,
    'put'
  );

  const editTransactionHandler = () => {
    sendRequest(
      () => {
        onDismiss();
        onUpdate(note);
      },
      { note: note }
    );
  };

  return (
    <Modal onDismiss={onDismiss}>
      <div className='my-5'>
        <div className='mb-5 flex flex-row items-center gap-2.5'>
          <MdOutlineCalendarMonth className='text-xl text-gray-500' />
          <p className='text-sm font-medium'>
            {formatTransactionDate(transaction.date)}
          </p>
        </div>

        <table className='mb-5 w-fit border-separate'>
          <tbody>
            {buildTableRow('Name:', humanize(transaction.name))}
            {transaction.merchant_name &&
              transaction.merchant_name !== transaction.name &&
              buildTableRow(
                'Merchant Name:',
                humanize(transaction.merchant_name)
              )}
            {transaction.merchan}
            {buildTableRow(
              'Amount:',
              formatCurrency(Math.abs(transaction.amount))
            )}
            {transaction.personal_finance_category.primary &&
              buildTableRow(
                'Category:',
                humanize(transaction.personal_finance_category.primary)
              )}
            {transaction.payment_channel &&
              buildTableRow(
                'Payment Channel:',
                humanize(transaction.payment_channel)
              )}
          </tbody>
        </table>
        <div>
          <p className='text-sm font-medium text-gray-500'>Note:</p>
          <textarea
            className='mt-2 w-full rounded border border-gray-300 bg-gray-50
              p-2.5 text-sm text-gray-900 focus:border-blue-500
              focus:ring-blue-500'
            placeholder='Add a note'
            type='text'
            rows='4'
            defaultValue={note}
            onChange={event => setNote(event.target.value)}
          />
        </div>
      </div>
      <button
        onClick={editTransactionHandler}
        className='mx-auto block cursor-pointer rounded border border-blue-500
          px-6 py-2 text-sm font-medium text-blue-500 transition-all
          duration-200 ease-in-out hover:bg-blue-500 hover:text-white'>
        Update Transaction
      </button>
    </Modal>
  );
};

export default TransactionEdit;
