import useAxios from '../hooks/use-axios';
import { MdAccountBalance } from 'react-icons/md';
import { IoMdRefresh } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import Card from './UI/Card';
import AccountLinkSkeleton from './UI/skeletons/AccountLinkSkeleton';
import LinkAccountReauthentication from './LinkAccountReauthentication';

const { formatCurrency, formatTime, pluralize } = require('../utils/helpers');
const { useEffect, useState } = require('react');

const AccountLink = ({ data, onUpdate }) => {
  const [isLoading, setIsLoading] = useState(
    !data.balance.updated_at || !data.transactions.updated_at
  );
  const [error, setError] = useState(null);

  const { sendRequest: sendDeleteRequest } = useAxios(
    '/links/' + data._id,
    'delete'
  );

  const { sendRequest: fetchBalanceDataRequest } = useAxios(
    `/links/${data._id}/balance`,
    'put'
  );

  const { sendRequest: fetchTransactionsDataRequest } = useAxios(
    `/links/${data._id}/transactions`,
    'put'
  );

  const errorHandler = error => {
    setError(error);
    setIsLoading(false);
  };

  const fetchBalanceData = async () => {
    await fetchBalanceDataRequest(
      response => {
        onUpdate({
          method: 'update',
          record: response.data
        });
      },
      {},
      errorHandler
    );
  };

  const fetchTransactionsData = async () => {
    await fetchTransactionsDataRequest(
      response => {
        onUpdate({
          method: 'update',
          record: response.data
        });
      },
      {},
      errorHandler
    );
  };

  const refreshAccountLinkHandler = async () => {
    await fetchBalanceData();
    await fetchTransactionsData();
    setIsLoading(false);
  };

  const deleteAccountLinkHandler = () => {
    if (window.confirm('Are you sure you want to delete this account?')) {
      sendDeleteRequest(() => {
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

  let isItemLoginRequiredError = false;
  if (error) {
    const errorData = error.response.data;
    isItemLoginRequiredError = errorData.code === 'ITEM_LOGIN_REQUIRED';
  }

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
              {!isItemLoginRequiredError && (
                <IoMdRefresh
                  className='cursor-pointer text-lg'
                  onClick={() => {
                    setIsLoading(true);
                  }}
                />
              )}
              <MdDelete
                className='cursor-pointer text-lg'
                onClick={deleteAccountLinkHandler}
              />
            </div>
          </div>
          <div className='px-5 pb-5'>
            {isItemLoginRequiredError ? (
              <LinkAccountReauthentication
                accessToken={data.access_token}
                onSuccess={() => {
                  setError(null);
                  setIsLoading(true);
                }}
              />
            ) : (
              <div>
                <ul>
                  {data.balance.accounts.map(account => (
                    <li key={account.account_id}>
                      <div className='mt-2.5 flex flex-row justify-between'>
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
            )}
            {data.transactions.updated_at && (
              <p className='mt-2.5 text-xs text-gray-500'>
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
