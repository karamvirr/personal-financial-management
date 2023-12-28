import axios from 'axios';
import Card from './UI/Card';
import { MdAccountBalance } from 'react-icons/md';

const { formatCurrency, formatTime, pluralize } = require('../utils/helpers');
const { useEffect } = require('react');

const AccountLink = ({ data, onUpdate }) => {
  let balanceDataContent = (
    <p className='text-center text-sm text-gray-500'>Fetching data...</p>
  );

  if (data.balance.updated_at) {
    const balanceData = data.balance;
    balanceDataContent = (
      <div>
        <ul>
          {balanceData.accounts.map(account => (
            <li key={account.account_id}>
              <div className='my-2.5 flex flex-row justify-between'>
                <div>
                  <p>{account.name}</p>
                  <p className='text-xs text-gray-500'>
                    Ending in {account.mask}
                  </p>
                </div>
                <div>
                  <p className='text-right'>
                    {formatCurrency(account.balances.current)}
                  </p>
                  <p className='text-xs text-gray-500'>
                    Last updated: {formatTime(data.balance.updated_at)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  useEffect(() => {
    // a null updated_at value indicates that the data has not been loaded
    if (!data.balance.updated_at) {
      axios
        .put(
          'http://localhost:8080/links/' + data._id + '/balance',
          {},
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then(response => {
          onUpdate(response.data);
        });
    }

    // a null updated_at value indicates that the data has not been loaded
    if (!data.transactions.updated_at) {
      axios
        .put(
          'http://localhost:8080/links/' + data._id + '/transactions',
          {},
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then(response => {
          onUpdate(response.data);
        });
    }
  }, []);

  return (
    <Card className='mx-auto w-11/12'>
      <div
        className='flex items-center gap-2.5 bg-neutral-200 px-5 py-2.5
        ring-1 ring-neutral-300'>
        <MdAccountBalance className='text-xl' />
        <p className='text-xl font-semibold'>{data.name}</p>
      </div>
      <div className='px-5 pb-5'>
        {balanceDataContent}
        {data.transactions.updated_at && (
          <p className='text-xs text-gray-500'>
            {data.transactions.data.length}{' '}
            {pluralize('transaction', data.transactions.data.length)}
          </p>
        )}
      </div>
    </Card>
  );
};

export default AccountLink;
