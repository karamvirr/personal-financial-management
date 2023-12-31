import Card from '../Card';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AccountLinkSkeleton = () => {
  return (
    <Card className='mx-auto w-3/5' repeat={2}>
      <div
        className='flex items-center justify-between
      bg-neutral-200 px-5 py-2.5 ring-1 ring-neutral-300'>
        <div className='flex items-center gap-2.5'>
          <Skeleton width={24} height={24} />
          <Skeleton width={100} height={24} />
        </div>
        <div className='flex gap-2.5'>
          <Skeleton width={24} height={24} />
          <Skeleton width={24} height={24} />
        </div>
      </div>
      <div className='px-5 pb-5'>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div key={index} className='my-2.5 flex flex-row justify-between'>
              <div>
                <Skeleton width={125} height={24} />
                <Skeleton width={75} height={20} />
              </div>
              <div className='flex flex-col items-end'>
                <Skeleton width={100} height={24} />
                <Skeleton width={200} height={20} />
              </div>
            </div>
          ))}
        <Skeleton height={20} width={96} />
      </div>
    </Card>
  );
};

export default AccountLinkSkeleton;
