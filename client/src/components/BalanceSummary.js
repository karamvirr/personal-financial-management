import Card from './UI/Card';

import { CiCreditCard1 } from 'react-icons/ci';
import { AiOutlineStock } from 'react-icons/ai';
import { IoCashOutline } from 'react-icons/io5';
import { GiReceiveMoney } from 'react-icons/gi';
import { PiDotsThreeCircleLight } from 'react-icons/pi';

const {
  humanize,
  formatCurrency,
  randomId,
  pluralize
} = require('../utils/helpers');

// For a full list of types, visit
// https://plaid.com/docs/api/accounts/#account-type-schema
//
// @param type        - the type of account
// @return            - the icon component
const getIcon = type => {
  const classList = 'text-2xl text-blue-500';

  switch (type.toLowerCase()) {
    case 'depository':
      return <IoCashOutline className={classList} />;
    case 'credit':
      return <CiCreditCard1 className={classList} />;
    case 'loan':
      return <GiReceiveMoney className={classList} />;
    case 'investment':
      return <AiOutlineStock className={classList} />;
    case 'other':
      return <PiDotsThreeCircleLight className={classList} />;
    default:
      return null;
  }
};

const BalanceSummary = ({ type, accounts }) => {
  return (
    <Card className='mb-5' key={type}>
      <div
        className='flex items-center justify-between bg-zinc-100
          px-5 py-2.5 shadow-sm'>
        <div className='flex flex-row items-center gap-2.5'>
          {getIcon(type)}
          <p className='font-semibold'>{humanize(type)}</p>
        </div>
        <p className='font-semibold'>{formatCurrency(accounts.total)}</p>
      </div>
      <div className='px-5'>
        {accounts.data.map(balance => (
          <div
            key={randomId()}
            className='my-2.5 flex items-start justify-between'>
            <div>
              <p>{balance.name}</p>
              <p className='text-xs text-gray-500'>{balance.official_name}</p>
            </div>
            <div>
              <p className='text-right'>
                {formatCurrency(balance.balances.current)}
              </p>
              {balance.balances.available && (
                <p className='text-right text-xs text-gray-500'>
                  Available: {formatCurrency(balance.balances.available)}
                </p>
              )}
              {balance.balances.limit && (
                <p className='text-right text-xs text-gray-500'>
                  Limit: {formatCurrency(balance.balances.limit)}
                </p>
              )}
            </div>
          </div>
        ))}
        <p className='my-2.5 text-xs text-gray-500'>
          {accounts.data.length} {pluralize('account', accounts.data.length)}
        </p>
      </div>
    </Card>
  );
};

export default BalanceSummary;
