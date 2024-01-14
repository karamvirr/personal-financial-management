import Card from './UI/Card';
import ProgressBar from './UI/ProgressBar';

const { formatCurrency } = require('../utils/helpers');

const NetWorthSummary = ({ data }) => {
  let assets = 0;
  let liabilities = 0;

  Object.entries(data).forEach(([type, balance]) => {
    let total = balance.total;
    if (type != 'depository' && type != 'investment') {
      liabilities += total;
    } else {
      assets += total;
    }
  });

  const netWorth = assets - liabilities;

  return (
    <Card className='mx-auto mb-5 w-3/4 p-5'>
      <div>
        <p className='text-sm font-semibold text-gray-500'>Net Worth</p>
        <p className='text-xl font-bold'>{formatCurrency(netWorth)}</p>
      </div>
      <div className='mt-2.5'>
        <div className='mb-2.5 flex flex-col gap-1.5'>
          <div className='flex flex-row justify-between'>
            <p className='font-semibold'>Assets:</p>
            <p>{formatCurrency(assets)}</p>
          </div>
          {assets > 0 && (
            <ProgressBar
              value={(assets / Math.abs(assets + liabilities)) * 100}
              color='bg-green-500'
            />
          )}
        </div>
        <div className='flex flex-col gap-1.5'>
          <div className='flex flex-row justify-between'>
            <p className='font-semibold'>Liabilities:</p>
            <p>{formatCurrency(liabilities)}</p>
          </div>
          {liabilities > 0 && (
            <ProgressBar
              value={(liabilities / Math.abs(assets + liabilities)) * 100}
              color='bg-red-500'
            />
          )}
        </div>
      </div>
    </Card>
  );
};

export default NetWorthSummary;
