import axios from 'axios';
import Modal from './UI/Modal';
import { useState } from 'react';

const TransactionEdit = ({ transaction, onDismiss, onUpdate }) => {
  const [note, setNote] = useState(transaction.note);

  const editTransactionHandler = () => {
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
        onDismiss();
        onUpdate(note);
      });
  };

  return (
    <Modal onDismiss={onDismiss}>
      <div className='my-5'>
        <div>
          <label className='text-sm font-medium text-gray-900'>Note</label>
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
        className='mx-auto block rounded border border-blue-500 px-6 py-2
          text-sm font-medium text-blue-500 transition-all duration-200
          ease-in-out hover:bg-blue-500 hover:text-white'>
        Update Transaction
      </button>
    </Modal>
  );
};

export default TransactionEdit;
