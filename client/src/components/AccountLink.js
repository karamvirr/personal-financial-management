import axios from 'axios';
import { MdAccountBalance } from 'react-icons/md';
import { IoMdRefresh } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import Card from './UI/Card';
import AccountLinkSkeleton from './UI/skeletons/AccountLinkSkeleton';

const { formatCurrency, formatTime, pluralize } = require('../utils/helpers');
const { useEffect, useState } = require('react');

const AccountLink = ({ data, onUpdate, onFailure }) => {
  const [isLoading, setIsLoading] = useState(
    !data.balance.updated_at || !data.transactions.updated_at
  );

  const fetchBalanceData = async () => {
    try {
      const response = await axios.put(
        'http://localhost:8080/links/' + data._id + '/balance',
        {},
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      onUpdate({
        method: 'update',
        record: response.data
      });
    } catch (error) {
      onFailure(error, data.name);
    }
  };

  const fetchTransactionsData = async () => {
    try {
      const response = await axios.put(
        'http://localhost:8080/links/' + data._id + '/transactions',
        {},
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      onUpdate({
        method: 'update',
        record: response.data
      });
    } catch (error) {
      onFailure(error, data.name);
    }
  };

  const refreshAccountLinkHandler = async () => {
    setIsLoading(true);
    await fetchBalanceData();
    await fetchTransactionsData();
    setIsLoading(false);
  };

  const deleteAccountLinkHandler = () => {
    if (window.confirm('Are you sure you want to delete this account?')) {
      axios.delete('http://localhost:8080/links/' + data._id).then(() => {
        onUpdate({
          method: 'delete',
          record: data
        });
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      refreshAccountLinkHandler();
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <AccountLinkSkeleton />
      ) : (
        <Card className='mx-auto w-3/5'>
          <div
            className='flex items-center justify-between
        bg-neutral-200 px-5 py-2.5 ring-1 ring-neutral-300'>
            <div className='flex items-center gap-2.5'>
              <MdAccountBalance className='text-xl' />
              <p className='text-xl font-semibold'>{data.name}</p>
            </div>
            <div className='flex gap-2.5'>
              <IoMdRefresh
                className='cursor-pointer text-lg'
                onClick={() => {
                  setIsLoading(true);
                }}
              />
              <MdDelete
                className='cursor-pointer text-lg'
                onClick={deleteAccountLinkHandler}
              />
            </div>
          </div>
          <div className='px-5 pb-5'>
            <div>
              <ul>
                {data.balance.accounts.map(account => (
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
            {data.transactions.updated_at && (
              <p className='text-xs text-gray-500'>
                {data.transactions.data.length}{' '}
                {pluralize('transaction', data.transactions.data.length)}
              </p>
            )}
          </div>
        </Card>
      )}
    </>
  );
};

export default AccountLink;
